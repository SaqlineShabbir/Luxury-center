import { connect } from "../../../connectDB/conectDB";
import Service from "../../../mongoose/models/serviceModel";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import cloudinary from "cloudinary";
//clowdinary

cloudinary.config({
    cloud_name: 'dpflnwsh8',
    api_key: '458275714364253',
    api_secret: '62ejvNBrkVxTCClRIDgtW8hhXBs',
});
export async function POST(request) {

    await connect()
    try {
        const body = await request.formData();
        const title = body.get('title')
        const description = body.get('description')
        const price = body.get('price')

        const file = body.get('photo')



        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)


        const path = `./files/${file.name}`
        // Save the file to the specified path
        await fs.writeFile(path, buffer);



        const cloudresult = await cloudinary.uploader.upload(path, {
            folder: 'files',
            public_id: file.name,
        });



        const response = await Service.create({
            title,
            description,
            price,
            photo: cloudresult?.secure_url

        });
        console.log(response)
        // Return success response
        return NextResponse.json({
            message: "Service created successfully",
            success: true,
            response
        });

    } catch (error) {
        console.error('Error creating service:', error);
        return NextResponse.json({
            error: error.message
        }, { status: 500 });
    }
}

export async function GET(request) {
    await connect()
    try {

        const services = await Service.find({})


        // Return success response
        return NextResponse.json({
            message: "successfully get services",
            success: true,
            services
        });

    } catch (error) {
        console.error('Error getting services:', error);
        return NextResponse.json({
            message: error.message
        }, { status: 500 });

    }
}


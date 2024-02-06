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
        console.log(file)


        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        console.log('bufferrr', buffer)

        const path = `./files/${file.name}`
        // Save the file to the specified path
        await fs.writeFile(path, buffer);

        console.log('File saved at:', path);

        const cloudresult = await cloudinary.uploader.upload(path, {
            folder: 'files', // Specify your desired folder in Cloudinary
            public_id: file.name, // Use the original file name as the public ID
        });


        // Uncomment the following lines if you want to save the Cloudinary URL in your database
        const response = await Service.create({
            title,
            description,
            price,
            photo: cloudresult?.secure_url

        });

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
        console.log(services)

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


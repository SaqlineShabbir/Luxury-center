import { connect } from "@/connectDB/conectDB";
import Service from "@/mongoose/models/serviceModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    await connect()
    try {
        // Assuming the ID is passed as a parameter in the URL

        const service = await Service.findOne({ _id: params.id });

        // Return success response with the specific service data
        return NextResponse.json({
            message: "Successfully get service by ID",
            success: true,
            service
        });

    } catch (error) {
        console.error('Error getting service by ID:', error);
        return NextResponse.json({
            message: error.message
        }, { status: 500 });
    }
}


import { connect } from "@/connectDB/conectDB";
import Message from "../../../mongoose/models/messageModel";

import { NextRequest, NextResponse } from "next/server"

export async function POST(NextRequest) {
    await connect();
    try {
        const reqBody = await NextRequest.json();
        const { firstname, lastname, email, phone, message } = reqBody;



        // Save the new user
        const result = await Message.create({
            firstname, lastname, email, phone, message
        });



        // Return success response
        return NextResponse.json({
            message: "Message send successfully",
            success: true,
            result
        });
    } catch (error) {


        // Return error response
        return NextResponse.json({
            error: error.message
        }, { status: 500 });
    }
}
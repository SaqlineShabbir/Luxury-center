import { connect } from "@/connectDB/conectDB";
import { getCookieInfo } from "@/helpers/getCookieInfo";
import User from "@/mongoose/models/userModel";
import { NextResponse, NextRequest } from "next/server";


export async function GET(NextRequest) {

    connect()
    try {
        const userId = await getCookieInfo(NextRequest)
        const user = await User.findOne({ _id: userId }).select("-password")
        return NextResponse.json({
            message: 'user found',
            user
        })

    } catch (error) {

    }
}
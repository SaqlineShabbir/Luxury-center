import { connect } from "@/connectDB/conectDB";
import { getCookieInfo } from "@/helpers/getCookieInfo";
import User from "@/mongoose/models/userModel";
import { NextResponse, NextRequest } from "next/server";


export async function GET(NextRequest) {

    connect()
    try {
        const userId = await getCookieInfo(NextRequest)
        const user = await User.findOne({ _id: userId }).select("-password")
        const response = NextResponse.json({
            message: 'user found',
            user
        })
        return response

    } catch (error) {
        return NextResponse.json(
            { error: error.message }
            , { status: 500 }
        )

    }
}
import { connect } from "@/connectDB/conectDB";
import Booking from "@/mongoose/models/BookingModel";
import Service from "@/mongoose/models/serviceModel";
import User from "@/mongoose/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connect();

    try {
        if (!request?.nextUrl?.searchParams?.userId) {
            const booking = await Booking.find({}).populate({ path: 'service', model: Service }).populate({ path: 'user', model: User })

            const response = NextResponse.json({
                message: 'booking',
                booking
            })
            return response
        }


    } catch (error) {
        console.error(error.message);

        return NextResponse.json({
            status: 500,
            message: error.message,
        });
    }
}
import Service from "@/mongoose/models/serviceModel";
import { connect } from "../../../connectDB/conectDB";
import Booking from "../../../mongoose/models/BookingModel";
import { NextResponse } from "next/server";
import User from "../../../mongoose/models/userModel";



export async function GET(request) {
    await connect();

    try {
        // Extract user ID from query parameters
        const searchParams = request.nextUrl.searchParams
        const userId = searchParams.get('userId')
        console.log('reqq', request.nextUrl.searchParams)

        if (!request.nextUrl.searchParams.userId) {
            const booking = await Booking.find({}).populate({ path: 'service', model: Service }).populate({ path: 'user', model: User })
            console.log(booking)
            const response = NextResponse.json({
                message: 'booking',
                booking
            })
            return response
        }
        if (request.nextUrl.searchParams) {
            // Retrieve bookings for the specified user
            console.log('yes')
            const response = await Booking.find({ user: userId }).populate({ path: 'service', model: Service }).populate({ path: 'user', model: User })

            return NextResponse.json({

                message: 'Your all bookings',
                response,
            });
        }




    } catch (error) {
        console.error(error.message);

        return NextResponse.json({
            status: 500,
            message: error.message,
        });
    }
}

export async function POST(NextRequest) {
    // Connect to the database
    await connect();

    try {
        // Parse the JSON body of the incoming request
        const reqBody = await NextRequest.json();
        const { userId, serviceId } = reqBody;

        // Check if the user has already booked the service
        const existingBooking = await Booking.findOne({ service: serviceId, user: userId });


        if (existingBooking) {
            // User has already booked this service

            return NextResponse.json({
                error: 'You have already applied to  this job',
            }, { status: 500 });
        } else {
            // User has not booked this service, create a new booking
            const newBooking = new Booking({
                user: userId,
                service: serviceId,
                status: 'Pending'
            });

            // Save the new booking
            const bookedService = await newBooking.save();

            // Return success response
            return NextResponse.json({
                message: "Service booked successfully",
                success: true,
                bookedService,
            });
        }
    } catch (error) {
        console.error(error.message);

        // Return error response
        return NextResponse.json({
            error: error.message,
        }, { status: 500 });
    }
}
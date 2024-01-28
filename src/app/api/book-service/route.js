import { connect } from "@/connectDB/conectDB";
import Booking from "@/mongoose/models/BookingModel";
import { NextResponse } from "next/server";

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



export async function GET(request) {
    await connect();

    try {
        // Extract user ID from query parameters
        const searchParams = request.nextUrl.searchParams
        const userId = searchParams.get('userId')

        // Check if user ID is provided
        if (!userId) {
            return NextResponse.json({
                status: 400,
                message: 'User ID is required in the query parameters.',
            });
        }

        // Retrieve bookings for the specified user
        const response = await Booking.find({ user: userId }).populate('service')


        return NextResponse.json({
            status: 200,
            message: 'Your all bookings',
            response,
        });
    } catch (error) {
        console.error(error.message);

        return NextResponse.json({
            status: 500,
            message: error.message,
        });
    }
}
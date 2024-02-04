import { connect } from "../../../../connectDB/conectDB";
import Booking from "../../../../mongoose/models/BookingModel";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
    await connect();

    try {
        const data = await request.json();
        const { id } = params;


        // Assuming the ID is passed as a parameter in the URL
        const booking = await Booking.findOneAndUpdate({ _id: id }, data, { new: true });

        // Check if the booking was found and updated
        if (!booking) {
            return NextResponse.json({
                message: "Booking not found",
                success: false,
            }, { status: 404 }); // Using 404 Not Found for resource not found
        }

        // Return success response with the updated booking data
        return NextResponse.json({
            message: "Successfully updated booking",
            success: true,
            booking,
        });
    } catch (error) {
        console.error('Error updating booking:', error);
        return NextResponse.json({
            message: error.message,
            success: false,
        }, { status: 500 });
    }
}
export async function DELETE(request, { params }) {
    await connect();

    try {
        const { id } = params;

        // Assuming the ID is passed as a parameter in the URL
        const booking = await Booking.findOneAndDelete({ _id: id });

        // Check if the booking was found and updated
        if (!booking) {
            return NextResponse.json({
                message: "Booking not found",
                success: false,
            }, { status: 404 }); // Using 404 Not Found for resource not found
        }

        // Return success response with the updated booking data
        return NextResponse.json({
            message: "Successfully Canceled booking",
            success: true,
            booking,
        });
    } catch (error) {
        console.error('Error deleteing booking:', error);
        return NextResponse.json({
            message: error.message,
            success: false,
        }, { status: 500 });
    }
}
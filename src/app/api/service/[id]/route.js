import { connect } from "../../../../connectDB/conectDB";
import Service from "../../../../mongoose/models/serviceModel";
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

export async function PATCH(request, { params }) {
    await connect();

    try {
        const data = await request.json();
        const { id } = params;


        // Assuming the ID is passed as a parameter in the URL
        const service = await Service.findOneAndUpdate({ _id: id }, data, { new: true });

        // Check if the booking was found and updated
        if (!service) {
            return NextResponse.json({
                message: "Booking not found",
                success: false,
            }, { status: 404 }); // Using 404 Not Found for resource not found
        }

        // Return success response with the updated booking data
        return NextResponse.json({
            message: "Successfully updated booking",
            success: true,
            booking: service,
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
        const service = await Service.findOneAndDelete({ _id: id });

        // Check if the booking was found and updated
        if (!service) {
            return NextResponse.json({
                message: "Service not found",
                success: false,
            }, { status: 404 }); // Using 404 Not Found for resource not found
        }

        // Return success response with the updated booking data
        return NextResponse.json({
            message: "Successfully Deleted Service",
            success: true,
            service,
        });
    } catch (error) {
        console.error('Error deleteing service:', error);
        return NextResponse.json({
            message: error.message,
            success: false,
        }, { status: 500 });
    }
}
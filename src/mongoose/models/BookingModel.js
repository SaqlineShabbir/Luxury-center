
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const bookingSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    service: {
        type: ObjectId,
        ref: 'Service'
    },
    status: {
        type: String,
        required: true

    },



}, { timestamps: true });

const Booking = mongoose.models.booking || mongoose.model("booking", bookingSchema);

export default Booking;
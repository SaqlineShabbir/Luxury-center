
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],

        trim: true

    },

    description: {
        type: String,
        required: [true, "description is required"],
        trim: true
    },

    price: {
        type: String,
        trim: true,
        required: [true, "price is required"]
    },
    photo: {
        type: String,
        trim: true,

    },

}, { timestamps: true });

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
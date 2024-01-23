
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "user first name is required"],
        maxlength: [20, "firstname should be at least 12 character"],
        trim: true

    },
    lastname: {
        type: String,
        maxlength: [20, "lastname should be at least 12 character"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "user email is required"],
        lowercase: true,
        unique: true,
        trim: true,
    },

    phone: {
        type: String,
        trim: true,
        required: [true, "phone number is required"]
    },

    message: {
        type: String,
        required: [true, "message  is required"]
    }
}, { timestamps: true });

const Message = mongoose.models.messages || mongoose.model("messages", messageSchema);

export default Message;

import User from "@/mongoose/models/userModel"
import { connect } from "../../../../connectDB/conectDB"
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server"
import jwt from 'jsonwebtoken';

export async function POST(NextRequest) {
    await connect();
    try {
        const reqBody = await NextRequest.json();
        const { firstname, lastname, email, password } = reqBody;
        console.log('req.bodyyy', reqBody);

        // Check if user exists
        const userExist = await User.findOne({ email });

        if (userExist) {
            return NextResponse.json({ error: "User already exists" }, { status: 404 });
        }

        // Make password hashed
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log('hasheddd', hashedPassword);

        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role: "User"
        });

        // Save the new user
        const saveUser = await newUser.save();

        console.log(saveUser);
        //create token 
        const tokenData = {
            id: saveUser._id,
            firstName: saveUser.firstname,
            lastname: saveUser.lastname,
            email: saveUser.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })
        // Return success response
        const response = NextResponse.json({
            message: "User created successfully",
            success: true,
            saveUser
        });
        response.cookies.set("accessToken", token, {
            httpOnly: true,

        })

        return response

    } catch (error) {
        console.error(error.message);

        // Return error response
        return NextResponse.json({
            error: error.message
        }, { status: 500 });
    }
}
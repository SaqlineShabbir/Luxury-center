"use client"
'use client'
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper'
import React, { useState } from 'react'
import Pinkbtn from '../shared/Pinkbtn'
import toast, { Toaster } from 'react-hot-toast'

const Message = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')


    //handle api request
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/contact-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, email, phone, message }),
            });

            if (response.ok) {

                toast.success('successfully send');
                // Clear form fields

                setFirstname('');
                setLastName('');
                setEmail('');
                setPhone('');
                setMessage('');

            } else {
                const errorData = await response.json();
                // console.log('sending failed:', errorData);

                toast.error(errorData.message || 'send failed');
            }
        } catch (error) {
            // console.error('Send failed:', error.message);
            toast.error('send failed');
        }
    }

    return (
        <main className='bg-slate-100'>
            <MaxWidthWrapper>
                <div className="flex items-center justify-center">
                    <div className="p-8 rounded w-[600px]">
                        <h1 className="text-3xl text-center font-bold md:mt-10 mb-10 md:mb-20">Contact us <br />For  <span className='text-green-500'>More</span></h1>
                        <form onSubmit={handleSubmit}>
                            <div className='md:flex justify-between'>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                        First Name
                                    </label>
                                    <input
                                        type="text"

                                        name="firstName"
                                        className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="John"
                                        required
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"

                                        name="lastName"
                                        className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="Doe"
                                        required
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='md:flex justify-between'>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"

                                        name="email"
                                        className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="john.doe@example.com"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                                        Phone Number
                                    </label>
                                    <input
                                        type="phone"

                                        name="phoneNumber"
                                        className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="123-456-7890"
                                        required
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                                    Message
                                </label>
                                <textarea

                                    name="message"
                                    rows="4"
                                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Your message here..."
                                    required
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <Toaster></Toaster>

                            {/* <button
                                type="submit"
                                className="w-full bg-pink-500 text-slate-100 p-2 rounded"
                            >
                                Send Message
                            </button> */}

                            <Pinkbtn type='submit' label="Send message" width='w-full' />

                        </form>
                    </div>
                </div>
            </MaxWidthWrapper>
            <hr />
        </main>
    )
}

export default Message
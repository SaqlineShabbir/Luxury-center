"use client"

import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper'
import React from 'react'
import Pinkbtn from '../Pinkbtn'

const Message = () => {
    return (
        <main className='bg-slate-100'>
            <MaxWidthWrapper>
                <div className="flex items-center justify-center">
                    <div className="p-8 rounded w-[600px]">
                        <h1 className="text-3xl text-center font-bold md:mt-10 mb-10 md:mb-20">Contact us <br />For  <span className='text-green-500'>More</span></h1>
                        <form>
                            <div className='md:flex justify-between'>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="John"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="Doe"
                                        required
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
                                        id="email"
                                        name="email"
                                        className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="john.doe@example.com"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="123-456-7890"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>

                            {/* <button
                                type="submit"
                                className="w-full bg-pink-500 text-slate-100 p-2 rounded"
                            >
                                Send Message
                            </button> */}

                            <Pinkbtn label="Send message" width='w-full' />

                        </form>
                    </div>
                </div>
            </MaxWidthWrapper>
            <hr />
        </main>
    )
}

export default Message
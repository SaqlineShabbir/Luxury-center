import Pinkbtn from '@/app/components/Pinkbtn'
import React from 'react'

const Review = () => {
    return (
        <main>
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    <form className='bg-green-50 w-[500px] p-10 shadow space-y-4 rounded'>
                        <input type="text" placeholder='Enter your name' className='rounded-md py-2 px-2 border w-full' />

                        <input type="email" placeholder='Enter your company name or designation' className='rounded-md py-2 px-2 border w-full' />

                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                            placeholder="Your message here..."
                            required
                        ></textarea>

                        <Pinkbtn label='Submit' />
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Review
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper'
import testmonialUsers from '@/app/lib/TestmonialUser'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <main className='bg-white py-20'>
            <MaxWidthWrapper>
                <div>
                    <h1 className='text-center text-3xl font-bold text-slate-700'>Testimonials</h1><br /><br /><br />

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {
                            testmonialUsers.map((user) => (
                                <div key={user.id} className='rounded-xl p-6 space-y-4 cursor-pointer hover:shadow-2xl duration-500'>
                                    <div className='flex justify-start items-center space-x-4'>
                                        <Image
                                            src={user.image}
                                            alt='user image'
                                            className='w-16 h-16 rounded-full border-2 border-pink-300 hover:grayscale duration-300'
                                        />

                                        <div>
                                            <h3 className='font-semibold'>{user.name}</h3>
                                            <p className='text-sm text-slate-500'>{user.position}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-slate-500'>{user.description}</p>
                                    </div>

                                    <div>
                                        <span>{user.rating}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </MaxWidthWrapper>
        </main>
    )
}

export default Testimonials
'use client'
import Image from 'next/image'
import userimage from "/public/assets/images/user1.png";
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthProvider';


const DashBoard = () => {
    const { user } = useContext(AuthContext);
    return (
        <main>

            <section className='flex justify-center items-center py-4 md:py-32'>
                <div className='w-[400px] h-full rounded-lg shadow p-6 space-y-2 bg-gray-100 cursor-pointer'>
                    <h1 className='text-center text-2xl text-green-300 font-bold'>Wellcome to Luxury Living</h1>
                    <div className='flex justify-center items-center'>
                        <Image
                            src={userimage}
                            alt='user picture'
                            className='w-20 h-20 border-4 border-green-500 rounded-full hover:grayscale hover:scale-110 duration-500'
                        />
                    </div>

                    <h3 className='text-xl text-center font-semibold'><span>{user?.firstname}{user?.lastname}</span></h3>
                    <p className='text-slate-500 text-center'>{user?.email}</p>
                </div>
            </section>
        </main>
    )
}

export default DashBoard
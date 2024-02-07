'use client'
import Pinkbtn from '@/app/components/shared/Pinkbtn';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://luxury-center.vercel.app/api/user?email=${email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role: 'Admin' }),
            });

            //

            if (response.ok) {

                toast.success('Updated Successfully')

            } else {
                console.error(`Failed to update `);
            }

        } catch (error) {
            console.error('Error updating status:', error.message);
        }

    }
    return (
        <main>
            <section className='py-10'>
                <Toaster />
                <div className='flex justify-start items-center'>

                    <form onSubmit={handleSubmit} className='bg-green-50 w-[500px] p-10 shadow space-y-4 rounded'>

                        <div>
                            <label className='text-lg text-slate-500'>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='someone@gmail.com' className='rounded-md py-2 px-2 border w-full' />
                        </div>


                        <Pinkbtn label="Submit" />
                    </form>
                </div>
            </section>
        </main>
    )
}
export default MakeAdmin;
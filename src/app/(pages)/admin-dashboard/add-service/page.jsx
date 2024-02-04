'use client'
import Pinkbtn from '@/app/components/shared/Pinkbtn';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoCloudUploadOutline } from "react-icons/io5";


const AddService = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')

    const data = new FormData()
    data.append('title', title)
    data.append('description', description)
    data.append('price', price)
    data.append('photo', photo)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://luxury-center.vercel.app/://localhost:3000/api/service', {
                method: 'POST',
                body: data,

            });

            if (response.ok) {

                toast.success('successfully created');
                setDescription('')
                setPrice('')
                setTitle('')
            } else {
                toast.error('failed to create');
            }
        } catch (error) {
            console.error('created failed:', error.message);
            toast.error(error.message);
        }

    }
    return (
        <main>
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    <form onSubmit={handleSubmit} className='bg-pink-50 w-[500px] p-10 shadow space-y-4 rounded'>

                        <div>
                            <label className='text-lg text-slate-500'>Service title</label>
                            <input type="text" placeholder='Enter title'
                                required
                                className='rounded-md py-2 px-2 border w-full'
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <Toaster />
                        <div>
                            <label className='text-lg text-slate-500'>Service description</label>
                            <textarea

                                name="description"
                                rows="4"
                                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                placeholder="Enter description..."
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className='text-lg text-slate-500'>Service Price</label>
                            <input type="number" placeholder='Enter price'
                                className='rounded-md py-2 px-2 border w-full'
                                required
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <label className='text-lg text-slate-500' >Image</label>
                        <div className='flex space-x-2'>
                            <label className="flex justify-center items-center px-4 py-2 bg-pink-100 text-pink-500 rounded-md cursor-pointer border-2 border-pink-300 w-full">
                                <IoCloudUploadOutline className="w-8 h-8 mr-4" />
                                Upload File
                                <input
                                    name='photo'
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                />
                            </label>


                            <Pinkbtn label="Submit" />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default AddService
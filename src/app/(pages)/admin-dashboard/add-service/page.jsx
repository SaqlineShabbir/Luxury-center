import Pinkbtn from '@/app/components/Pinkbtn';
import React from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";


const AddService = () => {
    return (
        <main>
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    <form className='bg-pink-50 w-[500px] p-10 shadow space-y-4 rounded'>

                        <div>
                            <label className='text-lg text-slate-500'>Service title</label>
                            <input type="text" placeholder='Enter title' className='rounded-md py-2 px-2 border w-full' />
                        </div>

                        <div>
                            <label className='text-lg text-slate-500'>Service description</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                                placeholder="Enter description..."
                                required
                            ></textarea>
                        </div>


                        <label className='text-lg text-slate-500' >Image</label>
                        <div className='flex space-x-2'>
                            <label className="flex justify-center items-center px-4 py-2 bg-pink-100 text-pink-500 rounded-md cursor-pointer border-2 border-pink-300 w-full">
                                <IoCloudUploadOutline className="w-8 h-8 mr-4" />
                                Upload File
                                <input
                                    type="file"
                                    className="hidden"
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
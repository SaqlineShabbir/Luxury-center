'use client'
import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';
import { IoCloudUploadOutline } from 'react-icons/io5';
const EditServiceModal = ({ setOpenModal, service, fetchData }) => {

    const [title, setTitle] = useState(service?.title)
    const [description, setDescription] = useState(service?.description)
    const [price, setPrice] = useState(service?.price)
    //post actual data to  backend

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://luxury-center.vercel.app/api/service/${service?._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, price }),
            });

            //

            if (response.ok) {
                toast.success('updated Successfully')
                fetchData()
                setOpenModal(false)

            } else {
                toast.error('Couldnot Update')
            }

        } catch (error) {
            console.error('Error updating status:', error.message);
            toast.error(error.message)
        }
    }

    return (

        <div
            id="close"
            onClick={(e) => {
                if (e.target.id === 'close') {
                    setOpenModal(false);
                }
            }}
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 w-full h-full   overflow-y-scroll"
            style={{ marginLeft: 0 }}
        >
            <div className="rounded  w-[400px] md:w-[900px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ">
                <IoIosCloseCircle size={20} color='red' className='cursor-pointer' onClick={() => setOpenModal(false)} />


                <h1 className=" lg:text-3xl text-gray-700 mb-5">
                    Update Service
                </h1>
                <hr />

                <div>

                </div>
                {/* //helllo */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2"

                            placeholder={service?.title}

                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <Toaster />
                    <div className="mb-4">
                        <textarea
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder={service?.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder={service?.price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>


                    <button className='px-8 py-1 bg-green-400' type='submit' width='w-full' >submit</button>





                </form>

            </div>
        </div>

    );
};

export default EditServiceModal;

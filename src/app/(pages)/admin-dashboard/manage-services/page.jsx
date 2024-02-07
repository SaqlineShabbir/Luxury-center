'use client'
import EditServiceModal from '@/app/components/adminDashBoard/EditServiceModal'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AiFillDelete } from 'react-icons/ai'
import { MdEditSquare } from 'react-icons/md'

const ManageServices = () => {
    const [data, setData] = useState([])
    const [serviceData, setServiceData] = useState({})
    const [openModal, setOpenModal] = useState(false)

    const fetchData = async () => {
        try {
            const response = await fetch('https://luxury-center.vercel.app/api/service', {
                method: 'GET',
            });
            const data = await response.json();
            setData(data?.services)


        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;

        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    //delete service
    const handleDeleteService = async (id) => {

        try {
            const response = await fetch(`https://luxury-center.vercel.app/api/service/${id}`, {
                method: 'DELETE',
            });
            if (response.status === 200) {
                toast.success(' Successfully Deleted')
                fetchData()

            }

            // Perform any other necessary actions (e.g., update state, show a notification)


        } catch (error) {
            console.error('Error deleting service:', error.message);
            toast.error(error.message)
            setError(`Error deleting service: ${error.message}`);
            // Handle errors (e.g., show an error message to the user)
        }
    }

    const handleSendId = (sdata) => {
        console.log(sdata)
        setServiceData(sdata)
    }


    return (
        <div className=' h-screen'>
            <Toaster />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-20'>
                {data?.map((service) => (
                    <div key={service?._id} >
                        <div className='group block rounded-md overflow-hidden hover:shadow-lg relative border'>
                            <div className='relative w-full h-32'>
                                <Image
                                    src={service?.photo}
                                    alt='service image'
                                    layout='fill'
                                    objectFit='cover'
                                    className='group-hover:opacity-75 transition-opacity'
                                />
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <span className=' text-4xl text-pink-500 cursor-pointer'><AiFillDelete onClick={() => handleDeleteService(service?._id)} /></span>
                                </div>
                            </div>
                            <div className='p-4 bg-white flex justify-between'>
                                <h3 className='text-xl font-semibold mb-2'>{service?.title}</h3>
                                <span onClick={() => setOpenModal(true)} className='text-pink-500 text-2xl cursor-pointer'><MdEditSquare onClick={() => handleSendId(service)} /></span>
                                {/* <p className='text-green-500 mb-1'>$ {service?.price}</p> */}
                                {/* <p className='text-gray-500'>{service?.description.slice(0, 170)}</p> */}
                            </div>
                        </div>
                        {openModal && <EditServiceModal setOpenModal={setOpenModal} service={serviceData} fetchData={fetchData} />}
                    </div>

                ))}
            </div>

        </div>
    )
}

export default ManageServices
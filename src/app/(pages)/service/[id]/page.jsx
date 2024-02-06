'use client'
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../../../components/shared/Navbar';
import Footer from '../../../components/shared/Footer';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import Image from 'next/image';

const page = ({ params }) => {

    const [data, setData] = useState('')
    const { user } = useContext(AuthContext);
    //fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://lhttps://luxury-center.vercel.app//api/service/${params?.id}`, {
                    method: 'GET'
                });
                // Handle the response data here
                const data = await response.json();
                setData(data)


            } catch (error) {
                // Handle errors here
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    //book this service
    const handleBookService = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://lhttps://luxury-center.vercel.app//api/book-service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user?._id,
                    serviceId: data?.service?._id
                }),
            });

            // Log the complete response for debugging


            // Parse JSON response
            const jsonResponse = await response.json();

            if (response.ok) {
                // Successful booking
                toast.success('Successfully booked');
            } else {
                // Handle error response
                toast.error(jsonResponse.message || 'You have already booked this service');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error booking service:', error);
            toast.error('Failed to book service. Please try again.');
        }
    };



    return (
        <main className="bg-gray-100 min-h-screen">
            <Toaster />
            <NavBar />

            <div className="flex justify-center items-center ">
                <div className="bg-white w-full min-h-[100vh] rounded-lg overflow-hidden">

                    <div className="relative h-80 overflow-hidden">

                        <Image
                            className="w-full h-full object-cover object-center"
                            src={data?.service?.photo}
                            alt={data?.service?.title}
                            layout="fill"
                        />
                    </div>
                    <div className="px-8 pt-10 md:px-[260px] flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">{data?.service?.title}</h1>

                        <p className="text-gray-700 text-lg mb-8 text-center">{data?.service?.description}</p>

                    </div>
                    <div className='flex justify-center'>
                        <button
                            onClick={handleBookService}
                            className="bg-green-500  hover:bg-green-700 text-white px-10 py-1 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-purple-300"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default page;
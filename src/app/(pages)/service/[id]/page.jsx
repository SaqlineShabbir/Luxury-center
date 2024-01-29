'use client'
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../../../components/shared/Navbar';
import Footer from '../../../components/shared/Footer';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const page = ({ params }) => {

    const [data, setData] = useState('')
    const { user } = useContext(AuthContext);
    //fetch data
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`https://luxury-center.vercel.app/api/service/${params?.id}`, {
    //                 method: 'GET'
    //             });
    //             // Handle the response data here
    //             const data = await response.json();
    //             setData(data)

    //         } catch (error) {
    //             // Handle errors here
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [params?.id]);



    //book this service
    const handleBookService = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await fetch('https://luxury-center.vercel.app/api/book-service', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             userId: user?._id,
        //             serviceId: data?.service?._id
        //         }),
        //     });

        //     // Log the complete response for debugging


        //     // Parse JSON response
        //     const jsonResponse = await response.json();

        //     if (response.ok) {
        //         // Successful booking
        //         toast.success('Successfully booked');
        //     } else {
        //         // Handle error response
        //         toast.error(jsonResponse.message || 'You have already booked this service');
        //     }
        // } catch (error) {
        //     // Handle network or other errors
        //     console.error('Error booking service:', error);
        //     toast.error('Failed to book service. Please try again.');
        // }
    };

    return (
        <main>
            <Toaster />
            <NavBar></NavBar>
            {/* <div className='flex flex-col items-center min-h-[90vh]'>
                <p className='text-2xl text-center'>{data?.service?.title}</p>
                <p className='text-2xl text-center'>{data?.service?.description}</p>
                <button onClick={handleBookService}>Book Service</button>
               
            </div> */}
            <Footer />
        </main>
    );
};

export default page;
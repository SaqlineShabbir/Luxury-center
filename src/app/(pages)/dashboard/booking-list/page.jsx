'use client'
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../../../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const page = async () => {
    // const { user } = useContext(AuthContext);
    // const [data, setData] = useState()

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(`https://luxury-center.vercel.app/api/book-service?userId=${user?._id}`, {
    //             method: 'GET'
    //         });

    //         Handle the response data here
    //         const data = await response.json();
    //         console.log('user', data)
    //         setData(data?.booking)


    //         You can process 'data' as needed (e.g., update state)
    //     } catch (error) {

    //         console.error('Error fetching data:', error);
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);

    //cancel booking
    // const handleCancelBooking = async (id) => {

    //     try {
    //         const response = await fetch(`https://luxury-center.vercel.app/api/book-service/${id}`, {
    //             method: 'DELETE',
    //         });
    //         if (response.status === 200) {
    //             toast.success('Booking cancled Successfull')
    //             fetchData()

    //         }
    //         console.log('Booking canceled successfully', response);



    //     } catch (error) {
    //         console.error('Error cancelling booking:', error.message);
    //         toast.error(error.message)
    //         setError(`Error cancelling booking: ${error.message}`);

    //     }
    // };

    // let content = null
    // if (data?.length <= 0) {
    //     content = <div><p className="text-center">No booking exist </p></div>
    // }

    // if (data?.length > 0) {
    //     content = <div className='bg-green-50 w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-4 rounded shadow'>
    //         {
    //             data?.map((selectService) => (
    //                 <div key={selectService?._id} className="bg-white p-6 rounded-lg space-y-4 shadow">
    //                     <div onClick={() => handleCancelBooking(selectService?._id)} className="flex justify-end hover:text-red-400"><MdDeleteForever size={20} /></div>
    //                     <div className="flex justify-between items-center">
    //                         <Image
    //                         src={selectService?.image}
    //                         alt="service icon"
    //                         className="w-16 h-16"
    //                     />

    //                         <button className="px-4 py-2 rounded bg-green-100 text-pink-500">{selectService?.status}</button>
    //                     </div>

    //                     <h2 className="text-xl text-slate-700 font-bold">{selectService?.service?.title}</h2>
    //                     <p className="text-slate-500 text-sm">{selectService?.service?.description}</p>

    //                 </div>
    //             ))
    //         }

    //     </div>
    // }
    return (
        <main>
            <Toaster />
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    {/* {content} */}
                </div>
            </section>
        </main>
    )
}

export default page
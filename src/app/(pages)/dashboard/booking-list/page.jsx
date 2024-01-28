'use client'

import { AuthContext } from "@/context/AuthProvider";
import Image from "next/image"
import { useContext, useEffect, useState } from "react";

const page = async () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/book-service?userId=${user?._id}`, {
                    method: 'GET'
                });

                // Handle the response data here
                const data = await response.json();
                setData(data?.response)


                // You can process 'data' as needed (e.g., update state)
            } catch (error) {
                // Handle errors here
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user?._id]);

    return (
        <main>
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    <div className='bg-green-50 w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-4 rounded shadow'>
                        {
                            data?.map((selectService) => (
                                <div key={selectService?._id} className="bg-white p-6 rounded-lg space-y-4 shadow">
                                    <div className="flex justify-between items-center">
                                        {/* <Image
                                            src={selectService?.image}
                                            alt="service icon"
                                            className="w-16 h-16"
                                        /> */}

                                        <button className="px-4 py-2 rounded bg-green-100 text-pink-500">{selectService?.status}</button>
                                    </div>

                                    <h2 className="text-xl text-slate-700 font-bold">{selectService?.service?.title}</h2>
                                    <p className="text-slate-500 text-sm">{selectService?.service?.description}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
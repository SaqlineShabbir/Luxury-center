"use client"

import React, { useEffect, useState } from 'react';
function getStatusColor(status) {
    switch (status) {
        case 'ongoing':
            return 'text-green-500 rounded-full';
        case 'pending':
            return 'text-pink-500 rounded-full';
        case 'completed':
            return 'text-blue-500 rounded-full';
        default:
            return 'text-gray-500';
    }
}

const OrderList = () => {

    //Fetch all data
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://luxury-center.vercel.app/api/book-service', {
                    method: 'GET'
                });

                // Assuming the response is in JSON format, you can extract data like this:
                const data = await response.json();
                setData(data?.booking)
                // Log the data to the console
                console.log(data?.booking);

            } catch (error) {
                // Handle any errors that occur during the fetch operation
                console.error('Error fetching data:', error.message);
            }
        };

        // Call the fetchData function when the component mounts (empty dependency array)
        fetchData();
    }, []);

    //update existing data

    return (
        <div className="container mx-auto mt-8 overflow-x-auto">
            <table className="min-w-full bg-green-50 rounded">
                <thead>
                    <tr>
                        <th className="py-2 border-b text-lg text-slate-500">Name</th>
                        <th className="py-2 border-b text-lg text-slate-500 hidden md:block">Email</th>
                        <th className="py-2 border-b text-lg text-slate-500">Service Title</th>
                        {/* <th className="py-2 border-b text-lg text-slate-500 hidden md:block">Pay With</th> */}
                        <th className="py-2 border-b text-lg text-slate-500">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map((item) => (
                        <tr key={item?._id}>
                            <td className="py-2 px-4 border-b text-slate-500">{item?.user.firstname}{item?.user.lastname}</td>
                            <td className="py-2 px-4 border-b text-slate-500 hidden md:block">{item?.user.email}</td>
                            <td className="py-2 px-4 border-b text-slate-500">{item?.service?.title}</td>
                            {/* <td className="py-2 px-4 border-b text-slate-500 hidden md:block">{item?.payWith}</td> */}
                            <td >
                                {/* className={`py-2 px-4 border-b ${getStatusColor(item?.status)}`} */}
                                <select
                                    // className={`px-2 py-1 ${getStatusColor(item?.status)}`}
                                    value={item?.status}
                                >
                                    <option value={item?.status}>{item?.status}</option>
                                    <option value="ongoing">Ongoing</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;

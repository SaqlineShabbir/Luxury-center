"use client"

import React, { useState } from 'react';

const initialData = [
    { name: 'John Doe', email: 'john.doe@example.com', serviceTitle: 'Web Development', payWith: 'Credit Card', status: 'ongoing' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', serviceTitle: 'Graphic Design', payWith: 'PayPal', status: 'pending' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', serviceTitle: 'Mobile App Development', payWith: 'Credit Card', status: 'completed' },
    { name: 'Alice Brown', email: 'alice.brown@example.com', serviceTitle: 'SEO Optimization', payWith: 'PayPal', status: 'ongoing' },
    { name: 'Charlie Davis', email: 'charlie.davis@example.com', serviceTitle: 'UI/UX Design', payWith: 'PayPal', status: 'pending' },
    { name: 'Eva Green', email: 'eva.green@example.com', serviceTitle: 'Content Writing', payWith: 'Credit Card', status: 'completed' },
];

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
    const [data, setData] = useState(initialData);

    const handleStatusChange = (index, selectedStatus) => {
        const newData = [...data];
        newData[index].status = selectedStatus;
        setData(newData);
    };

    return (
        <div className="container mx-auto mt-8 overflow-x-auto">
            <table className="min-w-full bg-pink-50 rounded">
                <thead>
                    <tr>
                        <th className="py-2 border-b text-lg text-slate-500">Name</th>
                        <th className="py-2 border-b text-lg text-slate-500 hidden md:block">Email</th>
                        <th className="py-2 border-b text-lg text-slate-500">Service Title</th>
                        <th className="py-2 border-b text-lg text-slate-500 hidden md:block">Pay With</th>
                        <th className="py-2 border-b text-lg text-slate-500">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b text-slate-500">{item.name}</td>
                            <td className="py-2 px-4 border-b text-slate-500 hidden md:block">{item.email}</td>
                            <td className="py-2 px-4 border-b text-slate-500">{item.serviceTitle}</td>
                            <td className="py-2 px-4 border-b text-slate-500 hidden md:block">{item.payWith}</td>
                            <td className={`py-2 px-4 border-b ${getStatusColor(item.status)}`}>
                                <select
                                    className={`px-2 py-1 ${getStatusColor(item.status)}`}
                                    value={item.status}
                                    onChange={(e) => handleStatusChange(index, e.target.value)}
                                >
                                    <option value="ongoing">Ongoing</option>
                                    <option value="pending">Pending</option>
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

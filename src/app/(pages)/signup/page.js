'use client'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';
import Pinkbtn from '@/app/components/shared/Pinkbtn';

import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import NavBar from '@/app/components/shared/Navbar';
import Footer from '@/app/components/shared/Footer';
// import Pinkbtn from '@/app/components/Pinkbtn';

const Signup = () => {
    const router = useRouter();
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, email, password }),
            });
            console.log(response)
            if (response.ok) {

                router.push('/');
                toast.success('Signup successful');
            } else {
                const errorData = await response.json();
                console.log('Signup failed:', errorData);

                toast.error(errorData.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Signup failed:', error.message);
            toast.error('Signup failed');
        }
    };

    return (
        <main>
            <NavBar></NavBar>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <h2 className="text-3xl font-bold mb-6 text-slate-700">Create an account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input

                                name='firstname'
                                required
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2"
                                placeholder="Write your first name"

                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <Toaster />
                        <div className="mb-4">
                            <input

                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2"
                                placeholder="Write your last name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-md p-2"
                                placeholder="john.doe@example.com"

                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                className="w-full border border-gray-300 rounded-md p-2"
                                placeholder="********"

                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Pinkbtn type='submit' label='Create an account' width='w-full' />

                        <p className='text-slate-700 py-2 text-sm'>Already have an account? <Link className='text-blue-500 hover:underline' href="/login">Login</Link></p><br />

                        <hr /><br />
                        <div className='flex justify-center items-center space-x-4'>
                            <FcGoogle className='w-10 h-10 cursor-pointer hover:scale-110 duration-500' />
                            <p className='text-xl text-slate-500 font-bold'>|</p>
                            <FaFacebook className='w-10 h-10 cursor-pointer hover:scale-110 duration-500 text-blue-500' />
                        </div>

                    </form>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default Signup;
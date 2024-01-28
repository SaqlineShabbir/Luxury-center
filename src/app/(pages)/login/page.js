'use client'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useContext, useState } from 'react';
import Pinkbtn from '@/app/components/shared/Pinkbtn';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import NavBar from '@/app/components/shared/Navbar';
import Footer from '@/app/components/shared/Footer';
import { AuthContext } from '@/context/AuthProvider';
// import Pinkbtn from '@/app/components/Pinkbtn';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { fetchUser } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            console.log(response)
            if (response.ok) {
                fetchUser()
                router.push('/');
                toast.success('successfully Loggedin');
            } else {
                const errorData = await response.json();
                console.log('login failed:', errorData);

                toast.error(errorData.message || 'Login failed');
            }
        } catch (error) {
            console.error('Signup failed:', error.message);
            toast.error('Signup failed');
        }
    }
    return (
        <main>
            <NavBar></NavBar>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <h2 className="text-3xl font-bold mb-6 text-slate-700">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-md p-2"
                                placeholder="john.doe@example.com"

                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <Toaster />
                        <div className="mb-4">
                            <input
                                type="password"
                                className="w-full border border-gray-300 rounded-md p-2"
                                placeholder="********"

                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Pinkbtn type='submit' label='Login' width='w-full' />

                        <p className='text-slate-700 py-2 text-sm'>Do not have an account? <Link className='text-blue-500 hover:underline' href="/signup">Signup</Link></p><br />

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
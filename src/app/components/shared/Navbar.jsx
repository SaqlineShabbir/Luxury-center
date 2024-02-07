"use client"

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import logo from "/public/assets/logo.png";
import links from '@/app/lib/NavLinks';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper';
import Pinkbtn from './Pinkbtn';
import { AuthContext } from '@/context/AuthProvider';


const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user } = useContext(AuthContext);

    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-100 w-full p-4">
            <MaxWidthWrapper>
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white font-bold text-xl">
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt='logo image'
                            className='animate-pulse'
                        />
                    </Link>

                    <div className="hidden sm:flex space-x-4">
                        {links.map((link) => (
                            <Link key={link.name} href={link.href}
                                className={clsx(
                                    'rounded-md font-medium hover:border-b-2 duration-500 hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
                                    {
                                        'border-b-4 text-blue-600': pathname === link.href,
                                    },
                                )}
                            >
                                <p className='text-lg text-slate-500'>{link.name}</p>
                            </Link>
                        ))}
                        {user?.role === 'Admin' && <Link className='rounded-md font-medium hover:border-b-2 duration-500 hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3' href="/admin-dashboard"><p className='text-lg  text-slate-500 font-semibold'>Admin</p></Link>}
                        {!user?.email && <Link href="/login" ><button className='px-10 py-1 bg-green-300 text-medium text-slate-100 font-semibold mt-2'>Login</button></Link>}
                    </div>

                    <div className="sm:hidden">
                        <div
                            className="focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <AiOutlineClose className='w-8 h-8' /> : <AiOutlineMenuUnfold className='w-8 h-8' />}
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="w-full h-full absolute top-16 text-xl font-semibold px-20 bg-white p-2 space-y-2 right-2">
                            {links.map((link) => (
                                <Link key={link.name} href={link.href}>
                                    <p className='text-lg text-center border-b-2 py-2 hover:bg-blue-100 rounded'>{link.name}</p>
                                </Link>
                            ))}

                            <Pinkbtn label="Login" href="/login" />
                        </div>
                    )}
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default NavBar;

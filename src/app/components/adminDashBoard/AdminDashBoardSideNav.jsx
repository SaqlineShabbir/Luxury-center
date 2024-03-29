'use client'
import Link from 'next/link';
import logo from "/public/assets/logo.png";
import { IoPowerOutline } from "react-icons/io5";
import Image from 'next/image';
import AdminDashBordnavLinks from './AdminDashBordnavLinks';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthProvider';

const AdminDashBoardSideNav = () => {
    const { user, logout } = useContext(AuthContext);


    const handleLogout = async (e) => {
        e.preventDefault();

        logout()

    };
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-center justify-center rounded-md bg-green-50 p-4"
                href="/"
            >
                <div className="w-32 md:w-40">
                    <Image
                        src={logo}
                        alt='logo'
                    />
                </div>
            </Link>

            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <AdminDashBordnavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-green-50 md:block"></div>

                <form>
                    <button onClick={handleLogout} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-green-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-500 md:flex-none md:justify-start md:p-2 md:px-3">
                        <IoPowerOutline className="w-6 h-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminDashBoardSideNav;

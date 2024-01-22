"use client"

import { GoListOrdered } from "react-icons/go";
import { MdAddShoppingCart } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GrBusinessService } from "react-icons/gr";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/admin-dashboard', icon: FaHome },
    {
        name: 'Order list',
        href: '/admin-dashboard/order-list',
        icon: GoListOrdered,
    },
    { name: 'Add service', href: '/admin-dashboard/add-service', icon: MdAddShoppingCart },
    { name: 'Make admin', href: '/admin-dashboard/make-admin', icon: IoPersonAddOutline },
    { name: 'Manage service', href: '/admin-dashboard/manage-services', icon: GrBusinessService },
];

const AdminDashBordnavLinks = () => {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-pink-100 hover:text-pink-500 md:flex-none md:justify-start md:p-2 md:px-3 duration-300',
                            {
                                'bg-pink-100 text-pink-500': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6 h-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
};
export default AdminDashBordnavLinks;

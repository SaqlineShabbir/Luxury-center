"use client"

import { MdAddShoppingCart, MdListAlt, MdOutlineRateReview } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/dashboard', icon: FaHome },
    {
        name: 'Book',
        href: '/dashboard/book',
        icon: MdAddShoppingCart,
    },
    { name: 'Booking list', href: '/dashboard/booking-list', icon: MdListAlt },
    { name: 'Review', href: '/dashboard/review', icon: MdOutlineRateReview },
];

const DashBordnavLinks = () => {
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
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-300 md:flex-none md:justify-start md:p-2 md:px-3 duration-300',
                            {
                                'bg-green-100 text-green-500': pathname === link.href,
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
export default DashBordnavLinks;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="w-full h-16 flex items-center px-4">
            <ul className="flex gap-10 list-none text-lg">
                <Link href="/" className={`${pathname === '/' ? 'text-cyan-400' : ''}`}>
                    <li className="hover:text-cyan-400 cursor-pointer">Home</li>
                </Link>

                <Link href="/shop" className={`${pathname === '/shop' ? 'text-cyan-400' : ''}`}>
                    <li className="hover:text-cyan-400 cursor-pointer">Shop</li>
                </Link>

                <Link href="/about" className={`${pathname === '/about' ? 'text-cyan-400' : ''}`}>
                    <li className="hover:text-cyan-400 cursor-pointer">About</li>
                </Link>

                <Link href="/contact" className={`${pathname === '/contact' ? 'text-cyan-400' : ''}`}>
                    <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
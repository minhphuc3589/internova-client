import Image from "next/image";
import Navbar from "./Navbar";

import { UserIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full flex justify-between border">
            <div className="flex items-center">
                <Link href="/">
                    <Image 
                        src="/assets/main_logo/horizontal_logo.jpg"
                        alt=""
                        width={100}
                        height={100}
                    />
                </Link>

                <Navbar />
            </div>

            <div className="flex items-center justify-center">
                <div className="flex justify-end">
                    <input className="border outline-none focus:border-cyan-400 rounded-lg p-2 w-1/2 focus:w-full transform transition-all duration-200" type="text" placeholder="Search..." />
                </div>

                <Link href="/profile">
                    <UserIcon className="h-8 w-8 text-gray-600 mx-4 cursor-pointer hover:text-cyan-400" />
                </Link>
                <Link href="/cart">
                    <ShoppingCartIcon className="h-8 w-8 text-gray-600 mx-4 cursor-pointer hover:text-cy" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
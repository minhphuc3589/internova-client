import Image from "next/image";
import Link from "next/link";

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full text-gray-500 px-8 py-4">
            <div className="border-b grid grid-cols-6 gap-10 pb-4 mb-4 items-stretch">
                <div className="flex flex-col">
                    <Image 
                        src="/assets/main_logo/horizontal_logo.jpg"
                        alt=""
                        width={80}
                        height={100}
                        className="w-16"
                    />
                    <p>Your destination for modern living and cutting-egde tech.</p>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-black font-bold text-lg h-[50px]">SHOP</h1>
                    <ul className="flex flex-col gap-2">
                        <li>All Products</li>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>Sale Items</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-black font-bold text-lg h-[50px]">SUPPORT</h1>
                    <ul className="flex flex-col gap-2">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Shipping & Returns</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-black font-bold text-lg h-[50px]">PRIVACY</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                
                <div className="flex flex-col col-span-2">
                    <h1 className="text-black font-bold text-lg h-[50px]">JOIN OUR NEWSLETTER</h1>

                    <p>Get the lastest updates on new products and upcoming sales.</p>

                    <Link href="/register" className="w-max mt-2 px-4 py-2 bg-cyan-400 text-white font-bold transform transition-all duration-200 rounded-lg hover:-rotate-6 hover:scale-110">Subcribe</Link>
                </div>
            </div>
            <div className="flex justify-between">
                <p className="">&copy; 2025 InterNova. All rights reserved.</p>

                <div className="flex gap-2 text-black">
                    <a className="mx-2 cursor-pointer hover:text-cyan-400">
                        <FaFacebook size={30} className="inline-block" />
                    </a>
                    <a className="mx-2 cursor-pointer hover:text-cyan-400">
                        <FaInstagram size={30} className="inline-block" />
                    </a>
                    <a className="mx-2 cursor-pointer hover:text-cyan-400">
                        <FaTwitter size={30} className="inline-block" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
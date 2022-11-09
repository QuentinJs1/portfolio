import Link from "next/link";
import Image from 'next/image';
import logo from '@public/images/logo.png';
import { MdRssFeed, MdDarkMode } from 'react-icons/md';
import '@styles/globals.css'
import '@styles/navbar.css'

export default function Navbar() {
    return (
        <nav className="bg-white h-20 max-h-20 flex flex-col items-center">
            <div className="w-screen h-1.5 bg-purple-100"></div>
            <div className="py-3 w-3/5 flex flex-row justify-between">
                <Link className="logo" href="../">
                    <Image src={logo} alt="Logo de quentin.js" id="logo-body" />
                    <div className="flex items-center">
                        <p className="logo-text text-lg font-bold">quentin.js</p>
                        <div className="eyes">
                            <div className="eye" id="eye-left"></div>
                            <div className="eye" id="eye-right"></div>
                        </div>
                    </div>
                </Link>
                <div className="flex flex-row text-sm items-center space-x-16 h-10">
                    <MdRssFeed className="cursor-pointer" />
                    <MdDarkMode className="cursor-pointer" />
                    <Link href="/blog">Blog</Link>
                    <Link href="/blog">Offre</Link>
                    <button className="bg-purple-100 py-2 px-4 text-white font-light rounded-xl">Me contacter</button>
                </div>
            </div>
        </nav>
    )
}
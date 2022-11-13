import styles from '@styles/Navbar.module.css'
import { useEffect, useState } from 'react';

export default function Navbar() {

    const navBarItems = ["blog"]

    let y: number;
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll, { passive: true });

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <nav className="sticky top-0 bg-white z-10">
            <div className="mx-auto px-2 sm:px-6 lg:px-8 xl:px-40 2xl:px-xl w-screen {y != 0 ? 'shadow-sm' : ''}">
                <div className="relative flex items-center justify-between sm:justify-between h-16 sm:h-16">
                    <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-deeppurple focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-shrink-0 sm:flex items-center">
                        <a href="../">
                            <img width="20" height="20" className="h-8 sm:h-10 w-auto" src="/svg/logo.svg" alt="Quentin.js logo" />
                        </a>
                    </div>
                    <div className="sm:flex-1 w-8 flex items-center justify-center sm:items-stretch sm:justify-end sm:mr-12">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-10">
                                {navBarItems.map((item, index) =>
                                    <a key={index} href={item} className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} text-deeppurple transition duration-200 hover:text-purple py-1 text-md font-medium`}>
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${menuOpen ? 'block' : 'hidden'} sm:hidden" id="mobile-menu`}>
                <div className="mt-12 px-2 pt-2 pb-3 space-y-1 h-screen flex flex-col items-center">
                    <a href="../" onClick={() => setMenuOpen(!menuOpen)} className="text-deeppurple hover:bg-purple hover:text-white block px-3 py-2 rounded-md text-xl font-medium">Accueil</a>
                    {navBarItems.map((item, index) =>
                        <a
                            key={index}
                            href={item}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-deeppurple hover:bg-purple hover:text-white block px-3 py-2 rounded-md text-xl font-medium">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    )}
                </div>
            </div>
        </nav>

    )
}
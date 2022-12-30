import styles from '@styles/Navbar.module.css'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

    const navBarItems = ['a propos', 'services', 'réalisations', 'blog']

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <div className='sticky mt-8 z-10'>
                <div className='line-x' />
                <div className='mx-auto px-6 md:max-w-3xl lg:max-w-6xl lg:px-0 w-full'>
                    <div className='relative flex items-center justify-between'>
                        <Link href='/' className='flex items-center'>
                            <Image width='80' height='80' className='h-10 w-auto' src='/images/logo.png' alt='Luden logo' />
                            <div className='text-white font-semibold ml-3 text-2xl'>Luden</div>
                        </Link>
                        <div className='flex items-center lg:hidden'>
                            <button onClick={() => setMenuOpen(!menuOpen)} type='button' className='inline-flex items-center justify-center p-2 rounded-md text-deeppurple focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' aria-controls='mobile-menu' aria-expanded='false'>
                                <span className='sr-only'>Open main menu</span>
                                <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#fff' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                                <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#fff' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>
                        <div className='md:flex-1 w-8 hidden items-center justify-center md:items-stretch md:justify-end text-white lg:block'>
                            <div className='md:ml-6'>
                                <div className='flex space-x-20 items-center justify-end'>
                                    <Link href='/a-propos' className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} transition duration-200 hover:text-white py-1 font-medium`}>
                                        A propos
                                    </Link>
                                    <Link href='/services' className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} transition duration-200 hover:text-white py-1 font-medium`}>
                                        Services
                                    </Link>
                                    <Link href='/realisations' className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} transition duration-200 hover:text-white py-1 font-medium`}>
                                        Réalisations
                                    </Link>
                                    <Link href='/blog' className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} transition duration-200 hover:text-white py-1 font-medium`}>
                                        Blog
                                    </Link>
                                    <Link href='/contact'>
                                        <button className='w-full py-4 px-8 font-medium bg-purple-500 rounded-lg transition-colors md:w-fit md:px-5 md:py-3 hover:bg-purple-300'>
                                            Contactez nous
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='line-x' />
                <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden' id='mobile-menu`}>
                    <div className='mt-12 px-2 pt-2 pb-3 space-y-1 h-screen flex flex-col items-center text-white'>
                        <Link href='/' onClick={() => setMenuOpen(!menuOpen)} className='hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-xl font-medium'>Accueil</Link>
                        {navBarItems.map((item, index) =>
                            <Link
                                key={index}
                                href={` /${item} `}
                                className='hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-xl font-medium'>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        )}
                        <Link href='/contact' className='pt-2'>
                            <button className='w-full py-4 px-8 font-medium bg-purple-500 rounded-lg text-lg transition-colors md:w-fit md:px-5 md:py-3 hover:bg-purple-300'>
                                Contactez nous
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
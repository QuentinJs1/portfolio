import styles from '@styles/Navbar.module.css'
import { useState } from 'react';
import Image from 'next/image'

export default function Navbar() {

    const navBarItems = ['services', 'portfolio', 'blog']

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <div className='sticky mt-8 z-10'>
                <div className='line-x' />
                <div className='mx-auto px-6 lg:px-40 2xl:px-80 w-w-full'>
                    <div className='relative flex items-center justify-between'>
                        <a href='../' className='flex items-center'>
                            <Image width='120' height='120' className='h-12 sm:h-12 w-auto' src='/images/logo.png' alt='Quentin.js logo' />
                            <div className='text-white font-medium ml-3 text-lg'>quentin.js</div>
                        </a>
                        <div className='flex items-center sm:hidden'>
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
                        <div className='sm:flex-1 w-8 hidden items-center justify-center sm:items-stretch sm:justify-end text-white'>
                            <div className='h-screen sm:block sm:ml-6'>
                                <div className='flex space-x-20 items-center'>
                                    {navBarItems.map((item, index) =>
                                        <a key={index} href={` ../${item} `} className={`${styles.linkUnderline} ${styles.linkUnderlineBlack} transition duration-200 hover:text-white py-1 text-md font-medium`}>
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </a>
                                    )}
                                    <button className='bg-purple py-3 px-5 rounded-lg text-md font-medium   '>
                                        Contactez nous
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='line-x' />
                <div className={`${menuOpen ? 'block' : 'hidden'} sm:hidden' id='mobile-menu`}>
                    <div className='mt-12 px-2 pt-2 pb-3 space-y-1 h-screen flex flex-col items-center text-white'>
                        <a href='../../' onClick={() => setMenuOpen(!menuOpen)} className='hover:bg-purple hover:text-white block px-3 py-2 rounded-md text-xl font-medium'>Accueil</a>
                        {navBarItems.map((item, index) =>
                            <a
                                key={index}
                                href={` ../${item} `}
                                onClick={() => setMenuOpen(!menuOpen)}
                                className='hover:bg-purple hover:text-white block px-3 py-2 rounded-md text-xl font-medium'>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>

    )
}
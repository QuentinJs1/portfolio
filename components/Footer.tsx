import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="mt-28 ">
            <div className='mx-6 text-white md:text-md md:flex md:flex-row md:mx-auto md:max-w-2xl lg:max-w-4xl lg:flex lg:justify-around'>
                <Link href='/' className='flex items-center md:items-start'>
                    <Image width='80' height='80' className='h-10 w-auto' src='/images/logo.png' alt='Luden logo' />
                    <div className='text-white font-semibold ml-3 text-2xl'>Luden</div>
                </Link>
                <section className="grid grid-cols-2 gap-4 text-sm mt-14 md:text-base md:mt-0 md:ml-40">
                    <div>
                        <h3>Services</h3>
                        <ul className="mt-4 h-44 gap-y-3 flex flex-col text-grey-200">
                            <li className='hover:text-white'><Link href="/services">Tarifs</Link></li>
                            <li className='hover:text-white'><Link href="/contact">Nous contacter</Link ></li>
                            <li className='hover:text-white'><Link href="/blog">Blog</Link ></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Entreprise</h3>
                        <ul className="mt-4 h-44 gap-y-3 flex flex-col text-grey-200">
                            {/* <li className='hover:text-white'><Link "/documentation">Kit de presse</Link ></li> */}
                            <li className='hover:text-white'><Link href="/politique-de-confidentialite">Politique de confidentialité</Link ></li>
                            <li className='hover:text-white'><Link href="/mentions-legales">Mentions légales</Link ></li>
                        </ul>
                    </div>
                </section>
            </div>
            <section
                className="flex flex-col items-center text-sm text-gray-200 mt-8 md:items-center md:justify-between"
            >
                <div className="md:mt-0 pb-4">© {new Date().getFullYear()} Luden · Tout droits reservés.</div>
            </section>
        </footer>
    )
}
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="mx-6 mb-10 text-white md:text-md md:flex md:flex-row md:mx-auto lg:max-w-4xl lg:flex lg:justify-around">
            <Image width='120' height='120' className='h-12 sm:h-12 w-auto' src='/images/logo.png' alt='Quentin.js logo' />
            <section className="grid grid-cols-2 gap-4 text-sm mt-14 md:text-base md:mt-0 md:ml-40">
                <div>
                    <h3>Service</h3>
                    <ul className="mt-4 h-44 gap-y-3 flex flex-col text-grey-200">
                        <li><a href="/documentation">Tarifs</a></li>
                        <li><a href="/changelog">Nous contacter</a></li>
                        <li><a href="/pricing">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Entreprise</h3>
                    <ul className="mt-4 h-44 gap-y-3 flex flex-col text-grey-200">
                        <li><a href="/documentation">Kit de presse</a></li>
                        <li><a href="/changelog">Politique de confidentialité</a></li>
                        <li><a href="/pricing">Conditions d&apos;utilisation</a></li>
                    </ul>
                </div>
            </section>
            {/* <section
                className="flex flex-col items-center text-sm text-gray-500 mt-8 md:items-center md:justify-between"
            >
                <div className="mt-8 md:mt-0">© 2022 Quentin.js · All rights reserved.</div>
            </section> */}
        </footer>
    )
}
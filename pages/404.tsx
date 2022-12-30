// 404.js
import Link from 'next/link'

export default function FourOhFour() {
    return (
        <section className="pb-20 min-h-screen flex flex-col items-center justify-center text-white mx-6 md:max-w-7xl md:mx-auto">
            <h1 className='font-bold text-5xl'>404 - OH OH.</h1>
            <h1 className='font-semibold text-xl mt-8'>On dirait bien que cette page n&apos;existe pas !</h1>
            <Link href='/' className='flex justify-center mt-12'>
                <button className='w-full py-4 px-8 font-medium bg-purple-500 rounded-lg transition-colors md:w-fit md:px-5 md:py-3 hover:bg-purple-300'>
                    Retourner à l&apos;accueil
                </button>
            </Link>
        </section>
    )
}
import Banner from '@components/Banner'
import Navbar from '@components/Navbar'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <main className='h-[92vh] flex flex-col justify-between'>
      <div></div>
      <div className="flex items-center justify-center px-6 lg:px-40 2xl:px-80 w-full" >
        <div className='h-full w-full flex justify-center text-white flex-col space-y-10'>
          <h1 className='text-5xl font-bold'>Lorem ipsum dolor, sit amet consectetur.</h1>
          <h2 className='text-xl font-regular'>Id libero cum laborum nisi saepe doloremque, quis quod? Voluptates laudantium facere fuga culpa dolorum neque minima sed. Suscipit commodi ea eveniet.</h2>
          <button className='bg-purple py-3 px-5 rounded-lg text-md font-medium w-40'>
            Work with Me
          </button>
        </div>
        <div className='h-full w-full'></div>
      </div>
      <div>
        <div className='flex items-center justify-center w-full t-10 text-white uppercase text-xs font-light'>Scroll for more</div>
        <Banner />
      </div>
    </main>
  )
}

export default Home

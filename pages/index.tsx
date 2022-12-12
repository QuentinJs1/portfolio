import Banner from '@components/Banner'
import type { NextPage } from 'next'
import { Canvas } from "@react-three/fiber";
import Experience from '3d/Experience';
import { StrictMode } from 'react'
import { Leva } from 'leva'
import css from "@styles/Home.module.css";
import { OrthographicCamera } from '@react-three/drei';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quentin.js - Freelance dev web</title>
        <link rel="canonical" href="https://quentinjs.com" key="canonical"/>
        <meta name="description" content="Duis a libero ut purus ultrices ultricies ac vitae sapien. Phasellus molestie a mi nec gravida. Aenean viverra vestibulum sapien sit amet auctor. Aliquam sapien sapien, convallis id turpis in, fermentum tincidunt lectus." key="desc" />
        <meta property="og:title" content="Quentin.js - Freelance dev web" />
        <meta property="og:description" content="Duis a libero ut purus ultrices ultricies ac vitae sapien. Phasellus molestie a mi nec gravida." />
        <meta property="og:image" content="https://quentinjs.com/images/social/og-image.png" />
        <meta property="og:url" content="https://quentinjs.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quentin__js" />
        <meta name="twitter:title" content="Quentin.js - Freelance dev web" />
        <meta name="twitter:description" content="Duis a libero ut purus ultrices ultricies ac vitae sapien. Phasellus molestie a mi nec gravida. Aenean viverra vestibulum sapien sit amet auctor. Aliquam sapien sapien, convallis id turpis in, fermentum tincidunt lectus." />
        <meta name="twitter:image" content="https://quentinjs.com/images/social/og-image.png" />
      </Head>
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
          <div className={`${css.scene} h-full w-full`}>
            {/* <StrictMode>
              <Leva collapsed />
              <Canvas
                className={css.canvas}
                orthographic
                camera={{ zoom: 112, position: [100, 100, 100] }}
              >
                <Experience />
              </Canvas>
            </StrictMode> */}
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center w-full t-10 text-white uppercase text-xs font-light'>Scroll for more</div>
          <Banner />
        </div>
      </main>
    </>
  )
}

export default Home

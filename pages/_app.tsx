import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Banner from "@components/Banner";
import Navbar from "@components/Navbar";
import Footer from '@components/Footer';
import Lines from '@components/Lines';
import Cookies from '@components/Cookies';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-dark overflow-x-hidden relative'>
      <Lines />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Cookies />
    </div>
  )
}

export default MyApp

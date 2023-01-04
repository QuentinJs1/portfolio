import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@components/Navbar";
import Footer from '@components/Footer';
import Lines from '@components/Lines';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className='bg-dark overflow-x-hidden relative'>
      <Lines />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

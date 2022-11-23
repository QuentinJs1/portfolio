import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Banner from "@components/Banner";
import Navbar from "@components/Navbar";
import Bottombar from '@components/BottomBar';
import Lines from '@components/Lines';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-dark overflow-x-hidden'>
      <Lines />
      <Navbar />
      <Component {...pageProps} />
      <Bottombar />
    </div>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Banner from "@components/Banner";
import Navbar from "@components/Navbar";
import Bottombar from '@components/BottomBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Banner />
      <Navbar />
      <Component {...pageProps} />
      <Bottombar />
    </>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Banner from "@components/Banner";
import Navbar from "@components/Navbar";
import Bottombar from '@components/BottomBar';
import { NextSeo } from 'next-seo';

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

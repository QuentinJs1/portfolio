import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Banner from "@components/Banner";
import Navbar from "@components/Navbar";
import Bottombar from '@components/BottomBar';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Quentin.js"
        titleTemplate="Quentin.js"
        defaultTitle="Quentin.js"
        description="Creative developer français, je suis capable de créer des expériences web 3D interactives en tant que freelance."
        canonical="https://quentinjs.com/"
        openGraph={{
          url: "https://quentinjs.com/",
          title: "Quentin.js",
          description: "Creative developer français, je suis capable de créer des expériences web 3D interactives en tant que freelance.",
          images: [
            {
              url: "/og-image.jpg",
              width: 800,
              height: 420,
              alt: "Quentin.js",
            },
          ],
        }}
        twitter={{
          handle: "@quentin__js",
          site: "@quentin__js",
          cardType: "summary_large_image",
        }}
      />
      <Banner />
      <Navbar />
      <Component {...pageProps} />
      <Bottombar />
    </>
  )
}

export default MyApp

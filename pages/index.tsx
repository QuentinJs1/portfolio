import Banner from '@components/Banner'
import Navbar from '@components/Navbar'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
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
      <main className="h-screen flex items-center justify-center" >
        <h1 className='font-semibold'>🚧 En construction, la clé USB revient bientôt ! 🚧</h1>
      </main>
    </>
  )
}

export default Home

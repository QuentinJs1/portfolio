import Head from 'next/head';
import Image from 'next/image'

export default function Services() {
    
    return (
        <>
            <Head>
                <title>Services - Luden</title>
                <link rel="canonical" href="https://luden.fr/services" key="canonical" />
                <meta name="description" content="Choisissez parmi trois offres différentes en fonction de vos besoins : un site web statique à 150€/mois, une offre SEO à 300€/mois ou un site dynamique à 450€/mois." key="desc" />
                <meta property="og:title" content="Services - Luden" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Choisissez parmi trois offres différentes en fonction de vos besoins : un site web statique à 150€/mois, une offre SEO à 300€/mois ou un site dynamique à 450€/mois." />
                <meta property="og:image" content="https://luden.fr/images/social/og-image.png" />
                <meta property="og:url" content="https://luden.fr/services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@quentin__js" />
                <meta name="twitter:title" content="Services - Luden" />
                <meta name="twitter:description" content="Choisissez parmi trois offres différentes en fonction de vos besoins : un site web statique à 150€/mois, une offre SEO à 300€/mois ou un site dynamique à 450€/mois." />
                <meta name="twitter:image" content="https://luden.fr/images/social/og-image.png" />
            </Head>
            <main className="mt-16 text-white mx-auto flex items-center flex-col">
                <h1 className="flex justify-center font-bold text-2xl">Nos services</h1>
                <section className='max-w-2xl mt-6 mx-6 '>
                    <h2 className='mt-12 font-semibold text-2xl'>Des sites web conçus de manière différente</h2>
                    <p className='mt-6 font-regular text-grey-200'>Nous n&apos;utilisons pas de générateurs de pages comme Wordpress, Shopify, Wix ou autres. Tous nos sites web sont codés à la main. Cela nous permet d&apos;avoir un contrôle total sur le design et d&apos;avoir sites web très rapides.</p>
                    <p className='mt-6 font-regular text-grey-200'>Les sites auto-générés sont lents, car ils ont beaucoup de code inutile dont on ne peut pas se débarraser. Hors dans le monde du web, les sites les plus rapides et les mieux organisés sont les grands gagnants.</p>
                </section>
                <Image width='600' height='600' className='mt-20' src="/images/main-image.webp" alt="Scène 3D où un petit robot surveille une chaîne d'assemblage, assisté par un bras motorisé." />
                <section className='max-w-2xl mx-6 '>
                    <h2 className='mt-12 font-semibold text-2xl'>Du contenu de qualité</h2>
                    <p className='mt-6 font-regular text-grey-200'>Sur internet, le contenu est roi. Si une agence vous dit qu&apos;elle peut faire monter votre site en première page de Google en trois mois, méfiez-vous ! Le SEO (Search Engine Optimization) peut prendre des années à se mettre en place. </p>
                    <p className='mt-6 font-regular text-grey-200'>Nos sites offrent les bases nécessaires pour que vos sites soient bien indexés sur Google. Nous utilisons plusieurs techniques pour obtenir les meilleurs résultats possibles :</p>
                    <ul className="mt-4 text-grey-200">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 mr-1.5 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Rédaction d&apos;articles intéressants centrés sur des mots-clés spécifiques
                        </li>
                        <li className="mt-2 flex items-start">
                            <svg className="w-6 h-6 mr-1.5 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Code propre et bien organisé pour satisfaire les robots Google
                        </li>
                        <li className="mt-2 flex items-start">
                            <svg className="w-6 h-6 mr-1.5 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Stratégies de link building, c&apos;est à dire faire en sorte que d&apos;autres sites ajoutent un lien vers le votre
                        </li>
                        <li className="mt-2 flex items-start">
                            <svg className="w-6 h-6 mr-1.5 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Respecter les dernières recommendations de Google et Bing
                        </li>
                    </ul>
                </section>
                <section className='max-w-2xl mt-12 mx-6 '>
                    <h2 className='mt-12 font-semibold text-2xl'>L&apos;étapes supérieure</h2>
                    <p className='mt-6 font-regular text-grey-200'>Nous nous efforcons de créer des designs modernes et agréables à utiliser pour vos clients. Pour les marques désirant aller plus loin dans leur présence en ligne, il nous est également possible de créer des expériences 3D intéractives qui vous établiront comme une marque incoutournable.</p>
                    <p className='mt-6 font-regular text-grey-200'>Nous sommes également capables de concevoir de véritables applications web comme des sites e-commerces, ou des saas en tout genre. </p>
                </section>
            </main>
        </>
    )
}

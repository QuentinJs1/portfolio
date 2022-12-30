import Question from '@components/Question';
import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quentin.js - Freelance dev web</title>
        <link rel="canonical" href="https://quentinjs.com" key="canonical" />
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
      <main className='text-white'>
        <section className='flex flex-col justify-center w-full px-6 pt-12 pb-20 text-center md:mx-auto md:px-16 md:pt-20 md:max-w-4xl lg:max-w-7xl lg:pt-0'>
          <div className="text-center flex flex-col items-center mx-auto lg:w-full lg:flex-row">
            <div className='lg:text-left lg:max-w-7xl'>
              <h1 className="text-3xl font-bold mb-4 leading-10 mt-10 md:text-5xl lg:text-4xl lg:leading-relaxed">
                Les petites entreprises ont  aussi le droit à des supers sites web
              </h1>
              <h2 className="my-6 font-light text-whiute md:leading-8 md:text-lg">
                Pas de Wordpress ou de no code - Nous offrons des sites modernes, performants et <strong className='font-bold underline underline-offset-4 decoration-4 decoration-purple-500'>100% codés à la main</strong> à partir de 150 €/mois.
              </h2>
              <Link href='/contact' className="mt-12 flex flex-col gap-4 w-full md:flex-row md:w-auto md:justify-center lg:justify-start">
                  <button className='w-full py-4 px-8 font-medium bg-purple-500 rounded-lg transition-colors md:w-fit md:px-5 md:py-3 hover:bg-purple-300'>
                      Contactez nous
                  </button>
              </Link>
            </div>
            <Image width='1400' height='1400' className='mt-20 lg:mt-6' src="/images/main-image.webp" alt="Scène 3D où un petit robot surveille une chaîne d'assemblage, assisté par un bras motorisé." />
          </div>
        </section>
        {/* <Banner /> */}
        <section>
          <section className='flex flex-col items-center mx-6 my-28 md:mx-16 lg:max-w-3xl lg:mx-auto
          '>
            <h2 className='text-3xl font-semibold md:text-4xl lg:text-3xl'>Pourquoi nous ?</h2>
            <p className='text-sm text-grey-200 pt-12 text-center md:text-base'>Nous sommes spécialisés dans le design et le développement web pour les petites et moyennes entreprises. <br /><br />
              Notre mission est de fournir des sites de grande qualité à toutes les entreprises qui en ont besoin, sans qu’elles aient à payer une fortune.</p>
          </section>
          <section className='flex flex-col mx-6 my-28 md:mx-16 md:text-base lg:max-w-6xl lg:flex lg:flex-row lg:mx-auto lg:items-center'>
            <div>
              <h2 className='text-xl font-semibold lg:text-2xl'>Nous nous occupons de <strong className='text-lightPurple font-semibold'>tout.</strong></h2>
              <p className='text-sm text-grey-200 pt-6 md:text-base lg:pr-20'>Vous n’avez pas le temps de vous occuper de votre site web, et c’est bien normal. Nous concevons, déployons et maintenons votre site web autant de temps que vous le souhaiterez. Modifications illimitées, sans engagement.</p>
            </div>
            <Image width='1500' height='200' className='mt-10 md:max-w-xl md:mx-auto lg:m-auto' src="/images/chill_and_work.webp" alt="Deux illustrations 3D côte à côte, une avec un homme qui se repose sur son transat, l'autre en train de travailler." />
          </section>
          <section className='flex flex-col mx-6 my-28 md:mx-16 md:text-base lg:max-w-6xl lg:flex lg:flex-row-reverse lg:mx-auto lg:items-center'>
            <div className='lg:pl-20'>
              <h2 className='text-xl font-semibold lg:text-2xl'>Des sites web <strong className='text-lightPurple font-semibold'>mémorables.</strong></h2>
              <p className='text-sm text-grey-200 pt-6 md:text-base'>En adoptant les dernières tendances du webdesign ainsi que l’illustration 3D, votre site web sera à la pointe de la modernité.
                Si notre focus numéro 1 est la facilité d’utilisation, nous incluons aussi de petites animations qui raviront vos utilisateurs.
                <br /><br />
                60% du traffic internet vient des téléphones. Nos sites sont donc conçus avant tout pour les mobiles. Ils sont totalement responsive, c’est-à-dire qu’ils fonctionneront aussi bien sur mobile, tablette et pc.</p>
            </div>
            <Image width='1200' height='1500' className='mt-10 md:max-w-xl md:mx-auto' src="/images/design.webp" alt="Deux illustrations 3D côte à côte, une avec un " />
          </section>
          <section className='flex flex-col mx-6 my-28 md:mx-16 md:text-base lg:max-w-6xl lg:flex lg:flex-row lg:mx-auto lg:items-center'>
            <div>
              <h2 className='text-xl font-semibold lg:text-2xl'>Chaque ligne de code est <strong className='text-lightPurple font-semibold'>écrite à la main.</strong></h2>
              <p className='text-sm text-grey-200 pt-6 md:text-base lg:pr-20'>Cela assure la meilleure performance possible et permet d’attirer plus de clients sur votre site, et donc de vous rapporter plus de revenus. Nous garantissons également que votre site sera accessible pour tous et naturellement bien classé sur Google.</p>
            </div>
            <Image width='1500' height='1500' className='mt-10 md:max-w-xl md:mx-auto' src="/images/lighthouse.webp" alt="3 indicateurs, le premier est performances avec 97%, les deux autres sont accessibilité et SEO à 100%." />
          </section>
        </section>
        <section className='bg-grey-700 my-28 px-6 py-8 md:px-16 lg:rounded-3xl lg:max-w-6xl lg:py-16 lg:mx-auto'>
          <div className='flex flex-col lg:max-w-4xl lg:mx-auto'>
            <h2 className='text-3xl font-semibold text-center lg:text-3xl'>0€ d’accompte, 150€ par mois.
              <br />
              <strong className='text-lightPurple font-semibold'>Sans engagement.</strong>
            </h2>
            <p className='text-sm text-grey-200 pt-14 md:text-base lg:text-center lg:max-w-3xl lg:mx-auto'>
              Obtenez un site de 5 pages standard sans payer un euro à l’avance. Si vous avez besoin de plus (site e-commerce, 3D web, plus de pages...), nous pouvons établir un prix personnalisé en fonction de l&apos;ampleur du  travail nécessaire.
              <br /><br />Vous pouvez annuler votre engagement quand vous le souhaitez, sans frais supplémentaires ni tracas.
              <br /><br />Nous favorisons des collaborations longues et de confiance avec nos clients, plutôt que des projets temporaires.</p>
            <section className='pt-8 grid grid-cols-1 my-6 gap-y-12 md:text-base md:gap-x-8 md:grid-cols-2 lg:mt-20'>
              <div className='flex flex-row'>
                <Image width='120' height='120' className='object-cover h-12 lg:pr-2 lg:h-14' src="/images/tools.webp" alt="Clé à molette et crayon l'un sur l'autre en 3D." />
                <div className='mx-2'>
                  <h3 className='mt-3 lg:text-lg'>Modifications illimitées</h3>
                  <p className='text-sm text-grey-200 pt-4'>Demandez autant de modifications que vous le souhaitez. Même si vous souhaitez refaire complètement le site.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <Image width='120' height='120' className='object-cover h-12 lg:pr-2 lg:h-14' src="/images/server.webp" alt="Serveurs avec un bouclier devant, en 3D." />
                <div className='mx-2'>
                  <h3 className='mt-3 lg:text-lg'>Frais d’hébergement inclus</h3>
                  <p className='text-sm text-grey-200 pt-4'>Les frais d’hébergements et de nom de domaines sont inclus dans l’abonnement.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <Image width='120' height='120' className='object-cover h-12 lg:pr-2 lg:h-14' src="/images/communication.webp" alt="Une bulle jaune qui sort d'un téléphone, avec un smiley heureux dessus." />
                <div className='mx-2'>
                  <h3 className='mt-3 lg:text-lg'>Joignables 7j/7</h3>
                  <p className='text-sm text-grey-200 pt-4'>Pas de standardiste ou de chatbot, vous pouvez nous contacter à tout moment par mail ou téléphone, et obtenir une réponse tout de suite.
                    La même personne sera avec vous tout le long de la collaboration.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <Image width='120' height='120' className='object-cover h-12 lg:pr-2 lg:h-14' src="/images/barchart.webp" alt="Un graph en 3D avec 5 barres, qui est en augmentation." />
                <div className='mx-2'>
                  <h3 className='mt-3 lg:text-lg'>Outils d’analyses</h3>
                  <p className='text-sm text-grey-200 pt-4'>Nous installons gratuitement des outils comme Google Analytics et Facebook Pixel afin de surveiller le traffic et sa provenance.</p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className='flex flex-col my-16 mx-6 md:px-16 lg:max-w-3xl lg:mx-auto'>
          <h2 className='text-3xl font-semibold text-center'>Comment je peux être sûr que vos sites sont de bonne qualité ?</h2>
          <p className='text-sm text-grey-200 pt-14 md:text-base lg:text-center'>
            Nous vous invitons à regarder notre travail pour que vous puissiez en <strong className='font-semibold underline underline-offset-2 decoration-2  decoration-purple-500'>juger par vous même.</strong>
            Quoi qu’il en soit, nous facturons qu’à partir du moment où vous serez satisfait, et
            quand votre site sera en ligne.
            <br /><br />
            Donc vous ne perdrez rien, à part un peut-être un peu de temps dans des réunions.
            <br />
            Bref, ce qu’on essaye de dire, c’est :
          </p>
          <Link href='/contact' className='flex justify-center mt-12'>
              <button className='w-full py-4 px-8 font-medium bg-purple-500 rounded-lg transition-colors md:w-fit md:px-5 md:py-3 hover:bg-purple-300'>
                  Contactez nous
              </button>
          </Link>
        </section>
        <section className='flex flex-col my-16 mx-6 pt-16 md:px-16 lg:py-20'>
            <h2 className='text-3xl font-semibold text-center lg:text-3xl'>Qui sommes-nous ?</h2>
            <div className='flex flex-col items-center mt-8 lg:m-0'>
              <Image width='120' height='120' className='object-fit h-40 w-40 rounded-full lg:mt-8' src="/images/avatar.webp" alt="Une photo de Quentin C., devant un fond bleu." />
              <h3 className='mt-6 font-semibold text-xl'>Quentin C.</h3>
              <label className='mt-2 text-grey-200 md:text-base'>Fondateur / Développeur</label>
            </div>
            <p className='text-sm text-grey-200 pt-14 md:text-base lg:max-w-3xl lg:mx-auto'>
              Mon nom est Quentin C., je suis un jeune diplômé d’un master informatique spécialisé dans l’ingénierie web.
              <br /><br />
              Après plus de 4 ans à faire des sites web et à m’intéresser au design, j’ai décidé de mettre mes compétences au profit des petites entreprises, car j’estime qu’elles méritent elles aussi le traitement des ‘grandes’.
            </p>
        </section>
        <section className="bg-grey-100 flex flex-col my-10 py-16 px-8 md:px-20 ">
          <div className="md:max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center md:text-left">Questions Fréquentes</h2>
            <div className="mt-8 flex flex-col">
              <Question
                question="Quel langage de code utilisez vous pour vos sites web ?"
                response={`Nous travaillons principalement sur le framework Javascript  SvelteKit,  cela nous permet d’obtenir des sites mieux référencés, plus rapide à charger, et plus réactifs.

                Nous utilisons tailwindcss pour l’écriture du CSS.
                
                Nos sites comportant de la 3D sont conçus avec Next.js ou React, en utilisant la librarie react-three-fiber.
                `}
              />
              <Question
                question="Puis-je obtenir un site web sans l’abonnement ?"
                response={`Oui, nous pouvons également vous livrer un site web. Nos tarifs démarrent à 3000€ pour un site statique.`}
              />
              <Question
                question="Puis-je annuler mon abonnement ?"
                response={`Oui, vous pouvez annuler votre abonnement quand vous le souhaitez sans aucun frais supplémentaire. Le site sera mis hors-ligne deux semaines après la reception du dernier paiement.`}
              />
              <Question
                question="Faites-vous du SEO ?"
                response={`Nos sites web sont conçus pour avoir les bases du SEO, c’est à dire que Google aura tout ce dont il a besoin pour indexer votre site (bonnes pratiques, fichiers nécessaires à l’enregistrement, etc).
                
                En revanche, nous ne proposons pas encore de stratégies SEO complètes, avec recherche poussée et écriture d’articles.`}
              />
              <Question
                question="Puis-je changer ma formule plus tard ?"
                response={`Oui, si après plusieurs mois vous souhaitez avoir la main sur votre site web, vous pouvez toujours nous régler la valeur du site moins la totalité des paiements versés durant votre abonnement. Nos tarifs commencent à 3000€.
                
                Par exemple, si vous êtes clients depuis 6 mois avec un abonnement à 150€/ mois, vous pourrez acheter le site pour 3000 - 6 * 150 = 2100€.`}
              />
              <Question
                question="Je ne connais rien à l’informatique ou au web, est-ce un souci ?"
                response={`Non, nous feront en sorte de prendre le temps nécessaire pour que tout soit 100% clair pour vous. Nous avons l’habitude de travailler avec des personnes qui ne sont pas à l’aise avec ces technologies.`}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

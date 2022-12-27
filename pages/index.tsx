import Banner from '@components/Banner'
import Question from '@components/Question';
import type { NextPage } from 'next'
import Head from 'next/head';

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
        <section className='flex flex-col justify-center w-full px-6 pt-12 pb-20 md:mx-auto md:px-16 md:pt-20 md:max-w-4xl lg:max-w-6xl lg:pt-28 text-center text-white'>
          <div className="text-center flex flex-col items-center mx-auto lg:max-w-3xl lg:px-12">
            <div>
              <h1 className="text-3xl font-bold mb-4 leading-10 mt-10 md:text-6xl lg:b-8 lg:my-3">
                Les petites entreprises ont  aussi le droit à des supers sites web
              </h1>
              <h2 className="my-6 font-light text-whiute md:leading-8 md:text-lg lg:mb-8">
                Pas de Wordpress ou de no code - Nous offrons des sites modernes, performants et <strong className='font-bold underline underline-offset-4 decoration-4  decoration-purple'>100% codés à la main</strong> à partir de 150 €/mois.
              </h2>
              <div className="flex flex-col gap-4 w-full md:flex-row md:w-auto">
                <button className='w-full py-4 text-white bg-purple rounded-lg hover:bg-purple transition-colors mt-10 md:w-fit md:px-5 md:py-3'>
                  Contactez nous
                </button>
              </div>
            </div>
            <img className='mt-20' src="/images/main-image.webp" alt="Scène 3D où un petit robot surveille une chaîne d'assemblage, assisté par un bras motorisé." />
          </div>
        </section>
        <Banner />
        <section>
          <section className='flex flex-col items-center mx-6 my-28
          '>
            <h2 className='text-3xl font-semibold'>Pourquoi nous ?</h2>
            <p className='text-sm text-grey-200 pt-12 text-center'>Nous sommes spécialisés dans le design et le développement web pour les petites et moyennes entreprises. <br /><br />
              Notre mission est de fournir des sites de grande qualité à toutes les entreprises qui en ont besoin, sans qu’elles aient à payer une fortune.</p>
          </section>
          <section className='flex flex-col mx-6 my-28'>
            <h2 className='text-xl font-semibold'>Nous nous occupons de <strong className='text-lightPurple font-semibold'>tout.</strong></h2>
            <p className='text-sm text-grey-200 pt-6'>Vous n’avez pas le temps de vous occuper de votre site web, et c’est bien normal. Nous concevons, déployons et maintenons votre site web autant de temps que vous le souhaiterez. Modifications illimitées, sans engagement.</p>
            <img className='mt-10' src="/images/chill_and_work.webp" alt="Deux illustrations 3D côte à côte, une avec un homme qui se repose sur son transat, l'autre en train de travailler." />
          </section>
          <section className='flex flex-col mx-6 my-28'>
            <h2 className='text-xl font-semibold'>Des sites web <strong className='text-lightPurple font-semibold'>mémorables.</strong></h2>
            <p className='text-sm text-grey-200 pt-6'>En adoptant les dernières tendances du webdesign ainsi que l’illustration 3D, votre site web sera à la pointe de la modernité.
              Si notre focus numéro 1 est la facilité d’utilisation, nous incluons aussi de petites animations qui raviront vos utilisateurs.
              <br /><br />
              60% du traffic internet vient des téléphones. Nos sites sont donc conçus avant tout pour les mobiles. Ils sont totalement responsive, c’est-à-dire qu’ils fonctionneront aussi bien sur mobile, tablette et pc.</p>
            <img className='mt-10' src="/images/design.webp" alt="Deux illustrations 3D côte à côte, une avec un " />
          </section>
          <section className='flex flex-col mx-6 my-28'>
            <h2 className='text-xl font-semibold'>Chaque ligne de code est <strong className='text-lightPurple font-semibold'>écrite à la main.</strong></h2>
            <p className='text-sm text-grey-200 pt-6'>Cela assure la meilleure performance possible et permet d’attirer plus de clients sur votre site, et donc de vous rapporter plus de revenus. Nous garantissons également que votre site sera accessible pour tous et naturellement bien classé sur Google.</p>
            <img className='mt-10' src="/images/lighthouse.webp" alt="3 indicateurs, le premier est performances avec 97%, les deux autres sont accessibilité et SEO à 100%." />
          </section>
        </section>
        <section>
          <section className='flex flex-col bg-grey-700 my-28 px-6 py-8'>
            <h2 className='text-3xl font-semibold text-center'>0€ d’accompte, 150€ par mois.
              <br />
              <strong className='text-lightPurple font-semibold'>Sans engagement.</strong>
            </h2>
            <p className='text-sm text-grey-200 pt-14'>
              Obtenez un site de 5 pages standard sans payer un euro à l’avance. Si vous avez besoin de plus (site e-commerce, 3D web, plus de pages...), nous pouvons établir un prix personnalisé en fonction de l'ampleur du  travail nécessaire.
              <br /><br />Vous pouvez annuler votre engagement quand vous le souhaitez, sans frais supplémentaires ni tracas.
              <br /><br />Nous favorisons des collaborations longues et de confiance avec nos clients, plutôt que des projets temporaires.</p>
            <section className='pt-16'>
              <div className='my-8 flex flex-row'>
                <img className='object-cover h-12' src="/images/tools.webp" alt="Clé à molette et crayon l'un sur l'autre en 3D." />
                <div className='mx-2'>
                  <h3 className='mt-3'>Modifications illimitées</h3>
                  <p className='text-sm text-grey-200 pt-4'>Demandez autant de modifications que vous le souhaitez. Même si vous souhaitez refaire complètement le site.</p>
                </div>
              </div>
              <div className='my-8 flex flex-row'>
                <img className='object-cover h-12' src="/images/server.webp" alt="Serveurs avec un bouclier devant, en 3D." />
                <div className='mx-2'>
                  <h3 className='mt-3'>Frais d’hébergement inclus</h3>
                  <p className='text-sm text-grey-200 pt-4'>Les frais d’hébergements et de nom de domaines sont inclus dans l’abonnement.</p>
                </div>
              </div>
              <div className='my-8 flex flex-row'>
                <img className='object-cover h-12' src="/images/communication.webp" alt="Une bulle jaune qui sort d'un téléphone, avec un smiley heureux dessus." />
                <div className='mx-2'>
                  <h3 className='mt-3'>Joignables 7j/7</h3>
                  <p className='text-sm text-grey-200 pt-4'>Pas de standardiste ou de chatbot, vous pouvez nous contacter à tout moment par mail ou téléphone, et obtenir une réponse tout de suite.
                    La même personne sera avec vous tout le long de la collaboration.</p>
                </div>
              </div>
              <div className='my-8 flex flex-row'>
                <img className='object-cover h-12' src="/images/barchart.webp" alt="Un graph en 3D avec 5 barres, qui est en augmentation." />
                <div className='mx-2'>
                  <h3 className='mt-3'>Outils d’analyses</h3>
                  <p className='text-sm text-grey-200 pt-4'>Nous installons gratuitement des outils comme Google Analytics et Facebook Pixel afin de surveiller le traffic et sa provenance.</p>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section>
          <section className='flex flex-col my-16 mx-6'>
            <h2 className='text-3xl font-semibold text-center'>Comment je peux être sûr que vos sites sont de bonne qualité ?</h2>
            <p className='text-sm text-grey-200 pt-14'>
              Nous vous invitons à regarder notre travail pour que vous puissiez en <strong className='font-semibold underline underline-offset-2 decoration-2  decoration-purple'>juger par vous même.</strong>
              Quoi qu’il en soit, nous facturons qu’à partir du moment où vous serez satisfait, et
              quand votre site sera en ligne.
              <br /><br />
              Donc vous ne perdrez rien, à part un peut-être un peu de temps dans des réunions.
              Bref, ce qu’on essaye de dire, c’est :
            </p>
            <button className='w-full py-4 text-white bg-purple rounded-lg hover:bg-purple transition-colors mt-10 md:w-fit md:px-5 md:py-3'>
              Contactez nous
            </button>
          </section>
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

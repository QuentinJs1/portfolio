import Image from 'next/image'

export default function APropos() {
    return (
        <section className="min-h-screen mt-14 text-white mx-6 md:max-w-2xl md:mx-auto">
            <h1 className="flex justify-center font-bold text-2xl">A propos</h1>
            <div className='flex flex-col items-center mt-8 lg:m-0'>
                <Image width='120' height='120' className='object-fit h-40 w-40 rounded-full lg:mt-8' src="/images/avatar.webp" alt="Une photo de Quentin C., devant un fond bleu." />
            </div>
            <h2 className='mt-12 font-semibold text-2xl'>Donner aux petites entreprises le traitement des grandes</h2>
            <p className='mt-6 font-regular text-grey-200'>Mon nom est Quentin C., je suis le dirigeant et le développeur unique de Luden. J'ai récemment obtenu un master en informatique spécialisé dans le web, et je développe des sites internet depuis maintenant 5 ans.</p>
            <p className='mt-6 font-regular text-grey-200'>J'ai découvert que de nombreuses petites entreprises ont des difficultés à débourser des milliers d'euros pour un nouveau site Internet. Et malheureusement, celles qui arrivent à le faire se retrouvent souvent avec des sites semblant sortir du Moyen-âge, conçus par des personnes qui n'ont pas suivi les tendances webdesign de ces dix dernières années. </p>
            <p className='mt-6 font-regular text-grey-200'>Il y a donc deux sources de frustration : soit les petites entreprises ne peuvent pas se permettre de créer un site web, soit elles le peuvent mais ont du mal à trouver une entreprise de confiance. C'est pour cette raison que j'ai créé l'offre 0 € d'avance, 150 € par mois. C'est bien moins coûteux, et cela permet de développer des relations de confiance.</p>
            <h2 className='mt-12 font-semibold text-xl'>La <strong className='font-semi-bold text-purple-300'>qualité</strong> avant la quantité</h2>
            <p className='mt-6 font-regular text-grey-200'>Nous nous concentrons sur les besoins de chaque entreprise individuelle et adaptons le contenu en fonction de ce qui la rend unique. Nous travaillons en étroite collaboration avec vous pour créer un site web qui vous conviendra à 100%.</p>
            <p className='mt-6 font-regular text-grey-200'>"Notre service client est imbattable et nous mettons un point d'honneur à répondre personnellement à chacune de vos demandes. Nous n'utilisons pas de systèmes automatisés, ce qui signifie que vous pouvez être sûr d'obtenir une réponse rapide et personnalisée chaque fois que vous nous contactez.</p>
            <p className='mt-6 font-regular text-grey-200'>Nous pouvons modfier le design de votre site web autant que vous le souhaitez. Tout est personnalisable !</p>
        </section>
    )
}
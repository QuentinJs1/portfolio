'use client'

import Image from 'next/image';
import ghost from '@public/images/ghost.png';

export default function Error() {
    return (
        <div className="py-40 flex h-screen items-center justify-center flex-col space-y-3 text-center">
            <Image alt="Petit personnage triste" src={ghost} />
            <h2 className="text-2xl">Erreur dans le chargement !</h2>
            <p className='text-sm'>C'est probalement un problème avec mon serveur.<br />Revenez un peu plus tard le temps que je règle ce bazar !</p>
            <p></p>
        </div>
    )
}
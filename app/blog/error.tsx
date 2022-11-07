"use client"

import Image from 'next/image';
import avatar from '../../public/images/ghost.png';

export default function Error({ error }: any) {
    return (
        <div className="flex h-screen items-center justify-center flex-col space-y-3 text-center">
            <Image alt="Petit personnage triste" src={avatar} />
            <h2 className="text-2xl">Erreur dans le chargement !</h2>
            <p className='text-sm'>C'est probalement un problème avec mon serveur.<br />Revenez un peu plus tard le temps que je règle ce bazar !</p>
            <p></p>
        </div>
    )
}
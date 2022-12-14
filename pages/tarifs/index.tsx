import { useState } from 'react';
import Link from 'next/link';
import { gsap } from "gsap"
import { useEffect } from 'react';

export default function Tarifs() {
    const [onetime, setOnetime] = useState(false)

    useEffect(() => {
        let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } })
    
        tl.to('#pricingCard', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1.5 })
    
      });

    return (
        <main className="mt-16 text-white mx-auto flex items-center flex-col">
            <h1 className="flex justify-center font-bold text-2xl">Nos services</h1>
            <section className='pt-8'>
                    <div className='flex items-center justify-between mt-10 bg-grey-900 rounded-full p-1 w-76 border-grey-500 border max-w-xs mx-auto'>
                        <button className={`${ onetime ? 'text-grey-200' : 'text-white bg-purple-500'} px-3 py-2 rounded-full transition animation-pulse`} onClick={() => setOnetime(!onetime)}>Abonnement</button>
                        <button className={`${ onetime ? 'text-white bg-purple-500' : 'text-grey-200'} px-3 py-2 rounded-full transition animation-pulse`} onClick={() => setOnetime(!onetime)}>En une seule fois</button>
                    </div>
                    { onetime ? <p className='my-4'></p> : <p className='text-center text-grey-200 text-sm my-4'>Tout nos abonnements sont SANS ENGAGEMENT. <br />Résiliez quand vous le souhaitez.</p> }
                    <div className="grid grid-cols-1 mx-6 order-1 lg:grid-cols-3 gap-8 mt-10 max-w-5xl">
                        <section id="pricingCard" className="rounded-lg border-grey-500 border bg-grey-900 flex items-center flex-col px-6 py-6 my-6">
                            <h2 className="font-semibold text-xl">Standard + Blog</h2>
                            <p className="text-center text-sm mt-6 text-grey-200 uppercase">site 5 pages + stratégie SEO</p>
                            { onetime ? <p className="text-center text-xs mt-3 text-grey-200">A partir de :</p> : <p className='mt-2'/> }
                            <div className={`mt-${ onetime ? '3' : '8' } text-grey-200`}><strong className="font-semibold text-5xl text-white">{ onetime ? '4000€' : '300€' }</strong>{ onetime ? '' : '/mois' }</div>
                            <ul className="mt-8 ml-4 text-grey-200">
                                <li className="mt-2 flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Articles de plus de 1000 mots
                                </li>
                                <li className="mt-2 flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    { onetime ? '4 articles optimisés' : '1 article  par mois' }
                                </li>
                                <li className="mt-2 flex items-start">
                                    <svg className="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Écrit par un spécialiste du SEO
                                </li>
                                <li className="mt-2 flex items-start">
                                    <svg className="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    150€ par article supplémentaire
                                </li>
                            </ul>
                            <Link href='/contact' className="mt-12 flex flex-col gap-4 w-full">
                                <button className='w-full py-2 font-medium bg-purple-500 rounded-lg transition-colors  hover:bg-purple-300'>
                                Contactez nous
                                </button>
                            </Link>
                        </section>
                        <section id="pricingCard" className="rounded-lg order-first lg:order-none border-purple-500 border bg-grey-900 flex items-center justify-between flex-col px-6 py-6">
                            <h2 className="font-semibold text-xl">Standard</h2>
                            <p className="text-center text-sm mt-6 text-grey-200 uppercase">site web statique de 5 pages</p>
                            { onetime ? <p className="text-center text-xs text-grey-200 mt-10">A partir de :</p> : <p className='mt-0'/> }
                            <div className={`mt-${ onetime ? '2' : '8'} text-grey-200`}><strong className="font-semibold text-5xl text-white">{ onetime ? '3000€' : '150€' }</strong>{ onetime ? '' : '/mois' }</div>
                            <ul className="mt-8 ml-4 text-grey-200">
                                <li className="mt-2 flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    { onetime ? 'Documentation complète' : 'Modifications illimitées'}
                                </li>
                                <li className="mt-2 flex items-start">
                                    <svg className="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    { onetime ? 'Déploiement & nom de domaine inclus' : 'Hébergement & nom de domaine inclus'}
                                </li>
                                <li className={`mt-2 flex items-${ onetime ? 'start' : 'center'}`}>
                                    <svg className={`w-4 h-4 mr-1.5 ${ onetime ? 'mt-1' : ''} text-green-500 dark:text-green-400 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    { onetime ? 'Hébergement pour 25€/mois' : 'Service client 24/7'}
                                </li>
                                {/* <li className={`mt-2 flex items-${ onetime ? 'start' : 'center'}`}>
                                    <svg className={`w-4 h-4 mr-1.5 ${ onetime ? 'mt-1' : ''} text-green-500 dark:text-green-400 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Photos par un professionnel 
                                </li> */}
                                <li className="mt-2 flex items-start">
                                    <svg className="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Logo & Illustrations 3D
                                </li>
                            </ul>
                            <Link href='/contact' className="mt-12 flex flex-col gap-4 w-full">
                                <button className='w-full py-2 font-medium bg-purple-500 rounded-lg transition-colors  hover:bg-purple-300'>
                                Contactez nous
                                </button>
                            </Link>
                        </section>
                        <section id="pricingCard" className="rounded-lg border-grey-500 border bg-grey-900 flex items-center flex-col px-6 py-6 my-6">
                            <h2 className="font-semibold text-xl">Pro</h2>
                            <p className="text-center text-sm mt-6 text-grey-200 uppercase">3d, e-commerce & site dynamiques</p>
                            <p className="text-center text-xs mt-3 text-grey-200">A partir de :</p>
                            <div className="mt-3 text-grey-200"><strong className="font-semibold text-5xl text-white">{ onetime ? '8000€' : '450€' }</strong>{ onetime ? '' : '/mois' }</div>
                            <ul className="mt-8 ml-4 text-grey-200">
                                <li className="mt-2 flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Expériences 3D
                                </li>
                                <li className="mt-2 flex items-start">
                                    <svg className="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Sites dynamiques, interfaces utilisateur
                                </li>
                                <li className="mt-2 flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Systèmes d&apos;authentification
                                </li>
                                <li className="mt-2 flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Systèmes de paiement
                                </li>
                            </ul>
                            <Link href='/contact' className="mt-12 flex flex-col gap-4 w-full">
                                <button className='w-full py-2 font-medium bg-purple-500 rounded-lg transition-colors  hover:bg-purple-300'>
                                Contactez nous
                                </button>
                            </Link>
                        </section>
                    </div>
                </section>
        </main>
    )
}
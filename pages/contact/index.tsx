import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [succeeded, setSucceeded] = useState(true)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        let data = {
            name,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setSucceeded(true)
            }
            else if (res.status === 400) {
              console.log('Response failed!')
              setSubmitted(true)
              setSucceeded(false)
            }
        })
    }

    return (
        <>
            <Head>
                <title>Contact - Luden</title>
                <link rel="canonical" href="https://luden.fr/contact" key="canonical" />
                <meta name="description" content="Contactez nous et recevez gratuitement une étude complète de votre site web actuelle, ainsi qu'une proposition d'amélioration." key="desc" />
                <meta property="og:title" content="Contact - Luden" />
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="Contactez nous et recevez gratuitement une étude complète de votre site web actuelle, ainsi qu'une proposition d'amélioration." />
                <meta property="og:image" content="https://luden.fr/images/social/og-image.png" />
                <meta property="og:url" content="https://luden.fr/contact" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@quentin__js" />
                <meta name="twitter:title" content="Contact - Luden" />
                <meta name="twitter:description" content="Contactez nous et recevez gratuitement une étude complète de votre site web actuelle, ainsi qu'une proposition d'amélioration." />
                <meta name="twitter:image" content="https://luden.fr/images/social/og-image.png" />
            </Head>
            <main className="min-h-screen flex flex-col justify-start">
                <section className="mt-8 text-white mx-4 md:max-w-2xl md:mx-auto">
                    {
                        submitted ? 
                        <div className={`mt-20 text-center ${ succeeded ? 'bg-emerald-700' : 'bg-red-700' } rounded-lg py-3 px-6 flex flex-col items-center`}>
                            <div className='flex items-center'>
                            { succeeded ? <svg className={`w-5 h-5 mr-1 text-white flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> : <div /> }
                                <p>{ succeeded ? 'Votre message à bien été envoyé.' : 'Il semblerait qu\'il y ait eu un problème.' }</p>
                            </div>
                            <p>{ succeeded ? 'Nous reviendront vers vous dès que possible.' : 'Merci de nous contacter à : contact@luden.fr le temps que nous résolvons cette erreur.' }</p>
                        </div> :
                        <>
                            <div className="bg-red-600 rounded-md text-sm text-center py-3 px-4 mt-6">Il y a actuellement beaucoup de demandes pour nos services, il est possible que nous ne soyons pas en mesure de travailler sur votre site web avant quelques temps. Néanmoins, nous répondrons à votre demande en moins de 24 heures pour vous apporter plus de précisions.</div>
                            <h1 className="mt-8 flex justify-center font-bold text-2xl">Contactez nous</h1>
                            <form className="flex flex-col bg-grey-700 w-full max-w-3xl py-6 px-6 rounded-xl mt-6 md:max-w-lg md:mx-auto" action="/send-data-here" method="post">
                                <input
                                    onChange={(e)=>{setName(e.target.value)}} 
                                    type="name"
                                    id="name"
                                    name="name"
                                    placeholder="Votre nom"
                                    required
                                    className="rounded-md py-2 px-3 font-regular bg-grey-500 text-sm text-white"
                                />
                                <input
                                    onChange={(e)=>{setEmail(e.target.value)}} 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Votre adresse mail"
                                    required
                                    className="rounded-md py-2 px-3 font-regular bg-grey-500 text-sm mt-6 text-white"
                                />
                                <textarea
                                    onChange={(e)=>{setMessage(e.target.value)}} 
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Dites-nous quelle est votre activité et, si vous avez une idée, quel genre de site web vous souhaiteriez avoir"
                                    rows={10}
                                    className="rounded-lg py-2 px-3 font-regular bg-grey-500 mt-6 text-sm text-white"
                                />
                                <div className="md:flex md:justify-center">
                                    <button type="submit" onClick={(e)=>{handleSubmit(e)}} className='w-full mt-6 py-3 px-8 font-medium text-sm bg-purple-500 rounded-lg transition-colors md:w-fit md:px-5 hover:bg-purple-300'>
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </>
                    }
                </section>
            </main>
        </>
    )
}
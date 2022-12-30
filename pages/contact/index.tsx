export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col justify-start">
            <section className="mt-8 text-white mx-4 md:max-w-2xl md:mx-auto">
                <div className="bg-red-600 rounded-md text-sm text-center py-3 px-4 mt-6">Il y a actuellement beaucoup de demandes pour nos services, il est possible que nous ne soyons pas en mesure de travailler sur votre site web avant quelques temps. Néanmoins, nous répondrons à votre demande en moins de 24 heures pour vous apporter plus de précisions.</div>
                <h1 className="mt-8 flex justify-center font-bold text-2xl">Contactez nous</h1>
                <form className="flex flex-col bg-grey-700 w-full max-w-3xl py-6 px-6 rounded-xl mt-6 md:max-w-lg md:mx-auto" action="/send-data-here" method="post">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Adresse mail"
                        required
                        className="rounded-md py-2 px-3 font-regular bg-grey-500 text-sm text-white"
                    />
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Votre demande..."
                        rows={10}
                        className="rounded-lg py-2 px-3 font-regular bg-grey-500 mt-6 text-sm text-white"
                    />
                    <div className="md:flex md:justify-center">
                        <button type="submit" className='w-full mt-6 py-3 px-8 font-medium text-sm bg-purple-500 rounded-lg transition-colors md:w-fit md:px-5 hover:bg-purple-300'>
                            Envoyer
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}
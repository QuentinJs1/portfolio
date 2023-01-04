export default function Cookies() {
    return (
        <section className="w-screen fixed bottom-0">
            <div className="bg-purple-500 py-3 px-2 flex items-center flex-col justify-evenly max-w-2xl mx-auto md:rounded-lg md:mb-4">
                <div className="text-center text-white px-3">
                    Nous utilisons des <a className="underline hover:no-underline" href="https://www.cnil.fr/fr/definition/cookie">cookies</a> pour mesurer l&aposaudience et améliorer notre site.
                </div>
                <div className="flex w-full justify-center my-3 px-3 md:mt-4">
                    <button className="py-2 px-3 rounded-lg mr-4 text-white w-full hover:underline">Refuser</button>
                    <button className="py-2 px-3 bg-white rounded-lg ml-4 font-medium text-dark w-full hover:bg-grey-200">Accepter</button>
                </div>
            </div>
        </section>
    )
}
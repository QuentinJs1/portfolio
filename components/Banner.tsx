import { useEffect, useState } from "react"

export default function Banner() {

    const [active, setActive] = useState(true)

    const quitBanner = () => {
        setActive(false)
    }

    return (<>
        {active &&
            <>
                <div className="flex w-screen px-12 min-h-96 text-center justify-center items-center bg-red bg-deeppurple ">
                    {/* <div className="text-white">{active}</div> */}
                    <p className="text-white text-sm my-2">Le site est encore en dev, c'est normal que pas mal de choses marchent pas ;)</p>
                    {/* <button onClick={quitBanner}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke="#fff" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> */}
                </div>
            </>
        }
    </>
    )
}
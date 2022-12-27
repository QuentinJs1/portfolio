import React from "react";
import { useState } from "react";

interface Props {
    question: string;
    response: string;
}

export default function Question({ question, response }: Props) {

    const [isOpen, setIsQuestion] = useState(false)
    const lines = response.split('\n');

    return (
        <button className=" pt-8" onClick={() => setIsQuestion(!isOpen)}>
            <div className="flex flex-row justify-between toast">
                <p className="text-lg font-medium text-left md:text-xl">{question}</p>
                <div>
                    <svg
                        className={`${isOpen ? 'rotate-45' : ''} transition-transform`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#98a6bb"
                        stroke="currentColor"
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </div>
            </div>
            <p className={`${isOpen ? 'text-open' : 'hidden'} text-left text-grey-200 pr-4 pt-4 md:text-lg`}>
                {lines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <div className="border-b pt-4 border-grey-200" />
        </button>
    )
}
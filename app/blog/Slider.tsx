'use client'

import { useState } from "react";
import '@styles/globals.css'
import Link from "next/link";

interface Types {
    categoriesNames: string[];
    categoriesSlugs: string[];
}

export default function Slider({ categoriesNames, categoriesSlugs }: Types) {

    const [currentCategory, setCurrentCategory] = useState('')

    return (
        <div className="my-10 flex justify-center space-x-16">
            {categoriesNames.map((category: string, index: number) =>
                <Link
                    href={`/blog/${categoriesSlugs[index]}`}
                    onClick={() => setCurrentCategory(categoriesNames[index])}
                    style={currentCategory == category ? { backgroundColor: 'var(--main-blue)', color: 'white' } : { backgroundColor: 'white' }}
                    className="w-28 list-none cursor-pointer bg-purple-100 rounded-lg py-2 px-4 flex justify-center text-black font-extralight">
                    {category}
                </Link>
            )}
        </div>
    )
}
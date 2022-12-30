import Link from "next/link";
import Image from 'next/image'

interface Article {
    title: string;
    category: string;
    timer: number;
    url: string;
    imageUrl: string;
    imageAlt: string;
}

export default function ArticleCard({ title, timer, url, imageUrl, imageAlt, category }: Article) {
    return (
        <div className="group w-full my-8 col-span-2 sm:col-auto md:px-6 text-white">
            <Link href={`blog/${url}`}>
                <Image
                    width={500}
                    height={500}
                    className="group-hover:scale-102 group-hover:cursor-pointer transition w-full h-60 md:h-72 object-cover rounded-lg"
                    src={imageUrl}
                    alt={imageAlt} />
            </Link>
            <div className="mt-4 flex flex-row justify-between text-xs text-darkgray uppercase font-semibold ">
                <div className="flex flex-row items-center ">
                    <p className="bg-purple-500 py-1 px-2 rounded-md">{category}</p>
                    <p className="mx-2 text-xs">-</p>
                    <p className="font-light">{timer} minutes de lecture</p>
                </div>
            </div>
            <Link href={`blog/${url}`}>
                <h2 className="mt-3 text-3xl text-deeppurple font-bold ">{title}</h2>
            </Link>
            <div className="block md:hidden my-4 w-full border-b border-extralightgray"></div>
        </div>
    )
}

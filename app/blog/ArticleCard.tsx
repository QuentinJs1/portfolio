import Link from "next/link";

interface Article {
    title: string;
    timer: number;
    url: string;
    imageUrl: string;
    imageAlt: string;
}

export default function ArticleCard({ title, timer, url, imageUrl, imageAlt }: Article) {
    return (
        <Link href="../">
            <div className="text-white group cursor-pointer rounded-3xl overflow-hidden w-96 h-56 mx-auto">
                <div className=" w-96 h-56 text-center rounded-b-3xl absolute flex flex-col justify-between shadow-[inset_0_-120px_40px_-50px_rgba(0,0,0,0.7)]">
                    <div className="flex justify-end">
                        <div className="px-3 py-2 text-sm bg-purple-100 mr-4 mt-3 rounded-lg">{timer} mins</div>
                    </div>
                    <h2 className="mb-3 text-lg">{title}</h2>
                </div>
                <img className="group-hover:h-58 transition-[height] ease-in-out duration-200 object-cover w-full h-56" src={imageUrl} alt={imageAlt} />
            </div>
        </Link>
    )
}

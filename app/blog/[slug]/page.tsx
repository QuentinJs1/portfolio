import ReactMarkdown from "react-markdown";
import '@styles/markdown-styles.css'

async function getArticle(slug: string) {
    const res = await fetch(
        `${process.env.API_ROUTE}/api/articles?filters[slug][$eq]=${slug}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )

    const data = await res.json()
    return data as any;
}


export default async function ArticlePage({ params }: any) {

    const article = await getArticle(params.slug)

    return <div className="smt-20 flex justify-center w-full">
        <div className="w-2/5 flex flex-col items-center">
            <div className="mt-28 font-bold text-purple-100">3D</div>
            <ReactMarkdown
                children={article.data[0].attributes.content}
                className="reactMarkDown"
            />
        </div>
    </div>
}
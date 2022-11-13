import ReactMarkdown from "react-markdown";
import styles from '@styles/Article.module.css'

export async function getServerSideProps({ params }: { params: any }) {
    const res = await fetch(
        `http://127.0.0.1:1337/api/articles?filters[slug][$eq]=${params.slug}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export default function Article({ article }: { article: any }) {
    return <div className="my-12 flex justify-center w-full">
        <div className="w-full px-4 lg:w-2/5 flex flex-col justify-start items-start xl:items-center">
            <ReactMarkdown
                children={article.data[0].attributes.content}
                className={styles.reactMarkDown}
            />
        </div>
    </div>
}
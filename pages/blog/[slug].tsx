import ReactMarkdown from "react-markdown";
import styles from '@styles/Article.module.css'
import Head from 'next/head';

export async function getServerSideProps({ params }: { params: any }) {
    const res = await fetch(
        `https://boiling-garden-52565.herokuapp.com/api/articles?filters[slug][$eq]=${params.slug}`,
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
            params
        },
    }
}

export default function Article({ article, params }: { article: any, params: any }) {
    return (
        <>
            <Head>
                <title>{ article.data[0].attributes.title }</title>
                <link rel="canonical" href={`https://quentinjs.com/blog/${article.data[0].attributes.slug}`} key="canonical"/>
            </Head>
            <div className="my-12 flex justify-center w-full">
                <div className="w-full px-4 lg:w-2/5 flex flex-col justify-start items-start xl:items-center">
                    <ReactMarkdown className={` ${styles.reactMarkDown} text-white `}>
                        {article.data[0].attributes.content}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    )
}
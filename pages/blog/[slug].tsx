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
                <meta name="description" content={ article.data[0].attributes.description } key="desc" />
                <meta property="og:title" content={ article.data[0].attributes.socialTitle } />
                <meta property="og:description" content={ article.data[0].attributes.description } />
                <meta property="og:image" content="https://quentinjs.com/images/social/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@quentin__js" />
                <meta name="twitter:title" content={ article.data[0].attributes.socialTitle } />
                <meta name="twitter:description" content={ article.data[0].attributes.description } />
                <meta name="twitter:image" content="https://quentinjs.com/images/social/og-image.png" />
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
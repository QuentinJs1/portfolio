import ReactMarkdown from "react-markdown";
import styles from '@styles/Article.module.css'
import { NextSeo } from "next-seo";

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
            <NextSeo
                title={article.data[0].attributes.content}
                titleTemplate={article.data[0].attributes.content}
                defaultTitle={article.data[0].attributes.content}
                description={article.data[0].attributes.description}
                canonical={`https://quentinjs.com/blog/${params.slug}`}
                openGraph={{
                    url: `https://quentinjs.com/blog/${params.slug}`,
                    title: `${article.data[0].attributes.content}`,
                    description: `${article.data[0].attributes.description}`,
                    images: [
                        {
                            url: `https://boiling-garden-52565.herokuapp.com${article.data[0].attributes.coverImage.data.attributes.formats.small.url}`,
                            width: 800,
                            height: 420,
                            alt: "Quentin.js Blog",
                        },
                    ],
                }}
                twitter={{
                    handle: "@quentin__js",
                    site: "@quentin__js",
                    cardType: "summary_large_image",
                }}
            />
            <div className="my-12 flex justify-center w-full">
                <div className="w-full px-4 lg:w-2/5 flex flex-col justify-start items-start xl:items-center">
                    <ReactMarkdown className={styles.reactMarkDown}>
                        {article.data[0].attributes.content}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    )
}
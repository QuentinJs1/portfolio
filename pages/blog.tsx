import ArticleCard from "@components/ArticleCard"
import Head from 'next/head';

export async function getStaticProps() {
    const res = await fetch(
        'https://boiling-garden-52565.herokuapp.com/api/articles?populate=*',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )

    const articles = await res.json()
    return {
        props: { articles },
    }
}

export default function BlogPage({ articles }: { articles: any }) {
    return (
        <>
            <Head>
                <title>Blog - Quentin.js</title>
                <link rel="canonical" href="https://quentinjs.com/blog" key="canonical"/>
                <meta name="description" content="Blog parlant de 3D, de développement web et de marketing." key="desc" />
                <meta property="og:title" content="Blog - Quentin.js" />
                <meta property="og:description" content="Blog parlant de 3D, de développement web et de marketing." />
                <meta property="og:image" content="https://quentinjs.com/images/social/og-image.png" />
                <meta property="og:url" content="https://quentinjs.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@quentin__js" />
                <meta name="twitter:title" content="Blog - Quentin.js" />
                <meta name="twitter:description" content="Blog parlant de 3D, de développement web et de marketing." />
                <meta name="twitter:image" content="https://quentinjs.com/images/social/og-image.png" />
            </Head>
            <main className="pt-4 h-screen sm:pt-12 pb-20 px-4 sm:px-20 xl:px-40 2xl:px-xl w-full bg-gradient-to-b from-lightwhite">
                <div className="w-full grid grid-cols-2">
                    {articles?.data.map((article: any, index: number) => {
                        return <ArticleCard
                            key={index}
                            category={article.attributes.category.data.attributes.slug}
                            title={article.attributes.title}
                            timer={article.attributes.timer}
                            url={article.attributes.slug}
                            imageUrl={`${article.attributes.coverImage.data.attributes.formats.small.url}`}
                            imageAlt={article.attributes.coverImage.data.attributes.alternativeText}
                        />
                    })}
                </div>
            </main>
        </>

    )
}
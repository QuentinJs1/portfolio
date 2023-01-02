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
                <title>Blog - Luden</title>
                <link rel="canonical" href="https://luden.fr/blog" key="canonical" />
                <meta name="description" content="Blog parlant de 3D, de développement web et de marketing." key="desc" />
                <meta property="og:title" content="Blog - Luden" />
                <meta property="og:description" content="Blog parlant de 3D, de développement web et de marketing." />
                <meta property="og:image" content="https://luden.fr/images/social/og-image.png" />
                <meta property="og:url" content="https://luden.fr" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@quentin__js" />
                <meta name="twitter:title" content="Blog - Luden" />
                <meta name="twitter:description" content="Blog parlant de 3D, de développement web et de marketing." />
                <meta name="twitter:image" content="https://luden.fr/images/social/og-image.png" />
            </Head>
            <main className="h-screen mt-16 pb-20 px-4 sm:px-20 xl:px-40 2xl:px-xl w-full bg-gradient-to-b from-lightwhite">
                <h1 className="flex justify-center font-bold text-2xl text-white">Blog</h1>
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
import ArticleCard from "@components/ArticleCard"
import { NextSeo } from "next-seo"

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
            <NextSeo
                title="Blog Quentin.js"
                titleTemplate="Blog Quentin.js"
                defaultTitle="Blog Quentin.js"
                description="Blog traitant principalement de développement web, de 3d et de marketing. J'y partage également mon parcours."
                canonical="https://quentinjs.com/blog/"
                openGraph={{
                    url: "https://quentinjs.com/blog/",
                    title: "Blog Quentin.js",
                    description: "Blog traitant principalement de développement web, de 3d et de marketing. J'y partage également mon parcours.",
                    images: [
                        {
                            url: "/og-image.jpg",
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
            <main className="pt-4 h-screen sm:pt-12 pb-20 px-4 sm:px-20 xl:px-40 2xl:px-xl w-full bg-gradient-to-b from-lightwhite">
                <div className="w-full grid grid-cols-2">
                    {articles?.data.map((article: any, index: number) => {
                        return <ArticleCard
                            key={index}
                            category={article.attributes.category.data.attributes.slug}
                            title={article.attributes.title}
                            timer={article.attributes.timer}
                            url={article.attributes.slug}
                            imageUrl={`https://boiling-garden-52565.herokuapp.com${article.attributes.coverImage.data.attributes.formats.small.url}`}
                            imageAlt={article.attributes.coverImage.data.attributes.alternativeText}
                        />
                    })}
                </div>
            </main>
        </>

    )
}
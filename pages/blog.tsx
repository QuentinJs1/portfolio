import ArticleCard from "@components/ArticleCard"

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
    )
}
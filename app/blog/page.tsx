import ArticleCard from "../../components/ArticleCard";

async function getArticles() {
    const res = await fetch(
        `${process.env.API_ROUTE}/api/articles?populate=*`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )

    const data = await res.json()
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data as any;
}

export default async function BlogPage() {

    const articles = await getArticles();

    return (
        <div className="flex h-screen space-y-4 justify-center mt-40">
            <div className="grid grid-cols-3 gap-6">
                {articles?.data.map((article: any) => {
                    return <ArticleCard
                        title={article.attributes.title}
                        timer={article.attributes.timer}
                        url={article.attributes.slug}
                        imageUrl={`${process.env.API_ROUTE}${article.attributes.coverImage.data.attributes.formats.small.url}`}
                        imageAlt={article.attributes.coverImage.data.attributes.alternativeText}
                    />
                })}
            </div>
        </div>
    )
}
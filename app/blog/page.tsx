import ArticleCard from "app/blog/ArticleCard";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import Slider from "./Slider";

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
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    return data as any;
}

export default async function BlogPage() {

    const articles = await getArticles();

    return (
        <div className="flex flex-col space-y-1">
            <Slider />
            <div className="grid grid-cols-3 gap-6">
                {[...Array(9)].map((_: any) => <ArticleCardSkeleton />)}
                {articles?.data.map((article: any) => {
                    return <ArticleCard
                        key={article.attributes.id}
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
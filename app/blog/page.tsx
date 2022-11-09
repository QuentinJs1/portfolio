import ArticleCard from "app/blog/ArticleCard";
import { useState } from "react";

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
    return data as any;
}

export default async function BlogPage() {

    const articles = await getArticles();

    return (
        <div className="grid grid-cols-3 gap-4 mb-20 h-screen my-20">
            {articles?.data.map((article: any) => {
                return <ArticleCard
                    key={article.attributes.id}
                    category={article.attributes.category.data.attributes.slug}
                    title={article.attributes.title}
                    timer={article.attributes.timer}
                    url={article.attributes.slug}
                    imageUrl={`${process.env.API_ROUTE}${article.attributes.coverImage.data.attributes.formats.small.url}`}
                    imageAlt={article.attributes.coverImage.data.attributes.alternativeText}
                />
            })}
        </div>
    )
}
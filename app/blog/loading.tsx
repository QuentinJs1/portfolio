import ArticleCardSkeleton from "./ArticleCardSkeleton";

export default function Loading() {
    return (
        <div className="flex h-screen space-y-4 justify-center my-20">
            <div className="grid grid-cols-3 gap-6">
                {[...Array(12)].map((_: any) => <ArticleCardSkeleton />)}
            </div>
        </div>
    )
}
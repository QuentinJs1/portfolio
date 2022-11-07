import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";

export default function Loading() {
    return (
        <div className="flex h-screen space-y-4 justify-center mt-40">
            <div className="grid grid-cols-3 gap-6">
                {[...Array(15)].map((_: any) => <ArticleCardSkeleton />)}
            </div>
        </div>
    )
}
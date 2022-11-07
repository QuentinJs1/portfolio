export default function ArticleCardSkeleton() {
    return (
        <div className="bg-white border-2 border-slate-200 rounded-3xl w-96 h-56 mx-auto flex flex-col justify-between">
            <div className="flex justify-end">
                <div className="text-sm animate-pulse bg-slate-300 mr-4 mt-3 rounded-lg h-8 w-16"></div>
            </div>
            <div className="flex justify-center">
                <div className="m-4 w-80 h-8 rounded-lg animate-pulse bg-slate-300"></div>
            </div>
        </div>
    )
}


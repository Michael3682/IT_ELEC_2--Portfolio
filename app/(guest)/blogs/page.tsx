import BlogsCard from "@/components/common/BlogsCard"
import BlogsDate from "@/components/features/blogs-feat/BlogsDate"
import BlogsCategory from "@/components/features/blogs-feat/BlogsCategory"

export default function Blog() {
    return (
        <div className="container mx-auto px-5 md:px-0 py-20 mt-5 space-y-10">
            <h1 className="text-4xl font-bold mb-7 text-primary">Blogs</h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <BlogsCategory />
                <span className="hidden md:block border-l border-ring self-stretch"></span>
                <BlogsDate />
            </div>
            <BlogsCard />
        </div>
    )
}
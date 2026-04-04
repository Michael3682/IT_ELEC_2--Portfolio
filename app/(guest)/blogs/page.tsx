import BlogsCard from "@/components/features/BlogsCard"
import BlogsDate from "@/components/features/BlogsDate"
import BlogsCategory from "@/components/features/BlogsCategory"

export default function Blog() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-7 text-primary">Blogs</h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <BlogsCategory />
                <span className="hidden md:block border-l border-ring self-stretch"></span>
                <BlogsDate />
            </div>
            <BlogsCard />
        </>
    )
}
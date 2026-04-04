import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import BlogsCard from "@/components/common/BlogsCard"
import BlogsDate from "@/components/features/blogs-feat/BlogsDate"
import BlogsCategory from "@/components/features/blogs-feat/BlogsCategory"
import { BLOG_POSTS, filterPosts, formatDateLabel } from "@/constants/blog"

export default async function BlogDatePage({ params }: { params: Promise<{ date: string[] }> }) {
    const { date } = await params

    const [year, month, day] = date || []

    const filteredPosts = filterPosts(BLOG_POSTS, {
        year,
        month,
        day,
    })

    return (
        <div className="container mx-auto px-5 md:px-0 py-20 mt-5 space-y-10">
            <Link className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4 hover:underline" href="/blogs">
                <ArrowLeft className="text-muted-foreground" size={20} />
                Back to blogs
            </Link>

            <div className="mb-4 text-primary">
                <h2 className="text-3xl font-bold">Date: {formatDateLabel(date)}</h2>
                <p>{filteredPosts.length} {filteredPosts.length > 1 ? "posts" : "post"} found</p>
            </div>

            <div className="flex gap-7 mb-4">
                <BlogsCategory />
                <span className="border-l border-ring"></span>
                <BlogsDate activeYear={year} activeMonth={month} />
            </div>

            <BlogsCard posts={filteredPosts.length > 0 ? filteredPosts : undefined} />
        </div>
    )
}
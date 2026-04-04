import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import BlogsCard from "@/components/common/BlogsCard"
import { BLOG_POSTS, filterPosts } from "@/constants/blog"
import BlogsDate from "@/components/features/blogs-feat/BlogsDate"
import BlogsCategory from "@/components/features/blogs-feat/BlogsCategory"

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string[] }> }) {
    const { category } = await params

    const filteredPosts = filterPosts(BLOG_POSTS, {
        category,
    })

    return (
        <div className="container mx-auto px-5 md:px-0 py-20 mt-5 space-y-10">
            <Link className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4 hover:underline" href="/blogs">
                <ArrowLeft className="text-muted-foreground" size={20} />
                Back to blogs
            </Link>

            <div className="mb-4 text-primary">
                <h2 className="text-3xl font-bold">Category: {category?.join(" / ")}</h2>
                <p>{filteredPosts.length} {filteredPosts.length > 1 ? "posts" : "post"} in this category</p>
            </div>

            <div className="flex gap-7 mb-4">
                <BlogsCategory activeCategory={category?.[category.length - 1]} />
                <span className="border-l border-ring"></span>
                <BlogsDate />
            </div>

            <BlogsCard posts={filteredPosts.length > 0 ? filteredPosts : undefined} />
        </div>
    )
}
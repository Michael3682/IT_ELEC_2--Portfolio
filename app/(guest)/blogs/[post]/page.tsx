import Link from "next/link"
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation"
import { BLOG_POSTS } from "@/constants/blog"

export default async function BlogPostPag({ params }: { params: Promise<{ post: string }> }) {
    const { post } = await params

    const blogpost = BLOG_POSTS.find((blog) => blog.slug === post)

    if (!blogpost || blogpost == null) {
        notFound()
    }
    return (
        <article>
            <Link className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4 hover:underline" href="/blogs">
                <ArrowLeft className="text-muted-foreground" size={20} />
                Back to blogs
            </Link>
            <div>
                <h2 className="text-3xl font-bold">{blogpost.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{blogpost.date} • {blogpost.author}</p>
                <p className="mt-4">{blogpost.content}</p>
            </div>
        </article>
    )
}
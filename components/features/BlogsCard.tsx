import Link from "next/link"
import { BLOG_POSTS } from "@/constants/blog"

export default function BlogsCard({limit}: {limit?: number}) {
    const blog_posts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS

    return (
        <>
            {blog_posts.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`}>
                    <div className="border border-ring rounded-md bg-muted p-5 hover:border-primary hover:shadow-lg transition duration-200 ease-linear">
                        <h2 className="text-lg font-semibold text-primary">{post.title}</h2>
                        <p className="text-muted-foreground mt-1">{post.overview}</p>
                        <p className="text-sm text-muted-foreground font-light mt-2">{post.date} • {post.author}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}
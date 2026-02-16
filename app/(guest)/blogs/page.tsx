import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/constants/blog"

export default function Blog() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Blogs</h1>
            <div className="flex items-center gap-4 mb-4">
                {BLOG_CATEGORIES.map((category) => (
                    <Link key={category.name} href={`/blogs/category/${category.slug}`}>
                        <Button className="cursor-pointer" variant="outline">
                            {category.name}
                        </Button>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-4">
                {BLOG_POSTS.map((post) => (
                    <Link key={post.id} href={`/blogs/${post.slug}`}>
                        <div className="border border-muted rounded-md p-5 hover:border-muted-foreground transition">
                            <h2 className="text-lg font-semibold">{post.title}</h2>
                            <p className="text-muted-foreground mt-1">{post.overview}</p>
                            <p className="text-sm text-muted-foreground font-light mt-2">{post.date} • {post.author}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
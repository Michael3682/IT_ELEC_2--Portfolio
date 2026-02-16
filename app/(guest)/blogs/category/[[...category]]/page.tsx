import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from "@/constants/blog"

function postsInCategory(posts: BlogPost[], categoryPath: string[]) {
    return posts.filter((post) => {
        for (let i = 0; i < categoryPath.length; i++) {
            if (!post.category.includes(categoryPath[i])) {
                return false
            }
        }
        return true;
    })
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string[] }> }) {
    const { category } = await params

    let filteredPost: BlogPost[] = []

    if (category) {
        filteredPost = postsInCategory(BLOG_POSTS, category)
    }

    return (
        <div>
            <Link className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4 hover:underline" href="/blogs">
                <ArrowLeft className="text-muted-foreground" size={20} />
                Back to blogs
            </Link>
            <div className="mb-4">
                <h2 className="text-3xl font-bold">Category: {category}</h2>
                <p>{filteredPost.length} {filteredPost.length > 1 ? "posts" : "post"} in this category</p>
            </div>
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
                {filteredPost.length === 0 ? (
                    BLOG_POSTS.map((post) => (
                        <Link key={post.id} href={`/blogs/${post.slug}`}>
                            <div className="border border-muted rounded-md p-5 hover:border-muted-foreground transition">
                                <h2 className="text-lg font-semibold">{post.title}</h2>
                                <p className="text-muted-foreground mt-1">{post.overview}</p>
                                <p className="text-sm text-muted-foreground font-light mt-2">{post.date} • {post.author}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    filteredPost.map((post) => (
                        <Link key={post.id} href={`/blogs/${post.slug}`}>
                            <div className="border border-muted rounded-md p-5 hover:border-muted-foreground transition">
                                <h2 className="text-lg font-semibold">{post.title}</h2>
                                <p className="text-muted-foreground mt-1">{post.overview}</p>
                                <p className="text-sm text-muted-foreground font-light mt-2">{post.date} • {post.author}</p>
                            </div>
                        </Link>
                    ))
                )
                }
            </div>
        </div>
    )
}
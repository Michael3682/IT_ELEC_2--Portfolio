import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BLOG_CATEGORIES } from "@/constants/blog"
import BlogsCard from "@/components/features/BlogsCard"

export default function Blog() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-10">Blogs</h1>
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
                <BlogsCard />
            </div>
        </>
    )
}
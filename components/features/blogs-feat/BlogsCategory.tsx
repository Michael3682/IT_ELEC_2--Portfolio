import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BLOG_CATEGORIES } from "@/constants/blog"

export default function BlogsCategory({ activeCategory }: { activeCategory?: string }) {
    return (
        <div className="flex flex-wrap items-center gap-3">
            <p className="font-medium">Filters :</p>
            <div className="flex gap-3 flex-wrap md:flex-nowrap">
                {BLOG_CATEGORIES.map((category) => {
                    const isActive = activeCategory?.includes(category.slug)
                    return (
                        <Link key={category.name} href={`/blogs/category/${category.slug}`}>
                            <Button className="cursor-pointer" variant={isActive ? "default" : "outline"}>
                                {category.name}
                            </Button>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
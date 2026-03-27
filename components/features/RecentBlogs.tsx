import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BlogsCard from "@/components/features/BlogsCard"

export default function RecentBlogs() {
    return (
        <section className="pt-15 space-y-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold text-center text-primary">Recent Blogs</h1>
                <p className="text-center text-primary">Thoughts and things I've been writing about.</p>
            </div>
            <div className="flex flex-col gap-7">
                <BlogsCard limit={3} />
            </div>
            <Link className="inline-flex items-center gap-1 text-lg font-medium text-muted-foreground hover:underline" href="/blogs">More Blogs <ArrowRight strokeWidth={2} /></Link>
        </section>
    )
}
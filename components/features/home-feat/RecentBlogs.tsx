"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import BlogsCard from "@/components/common/BlogsCard"

export default function RecentBlogs() {
    return (
        <section className="container mx-auto px-5 md:px-0 pt-10 pb-20 space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                viewport={{ once: true, margin: "-250px" }}
                className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold text-center text-primary">Recent Blogs</h1>
                <p className="text-center text-primary">Thoughts and things I've been writing about.</p>
            </motion.div>
            <div className="flex flex-col gap-7">
                <BlogsCard limit={3} />
            </div>
            <Link className="inline-flex items-center gap-1 text-lg font-medium text-primary hover:underline" href="/blogs">
                More Blogs <ArrowRight strokeWidth={2} />
            </Link>
        </section>
    )
}
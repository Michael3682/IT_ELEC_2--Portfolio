"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { BLOG_POSTS, type BlogPost } from "@/constants/blog"

export default function BlogsCard({ limit, posts }: { limit?: number, posts?: BlogPost[] }) {
    const displayPosts = posts ?? (limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS)

    return (
        <div className="flex flex-col gap-4">
            {displayPosts.map((post, index) => (
                <Link key={post.id} href={`/blogs/${post.slug}`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7, y: 60 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "backOut", delay: index * 0.15 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="border backdrop-blur shadow-lg bg-secondary/50 rounded-md p-5 hover:border-primary hover:shadow-lg transition duration-200 ease-linear">
                        <h2 className="text-lg font-semibold text-primary">{post.title}</h2>
                        <p className="text-muted-foreground mt-1">{post.overview}</p>
                        <p className="text-sm text-muted-foreground font-light mt-2">{post.date} • {post.author}</p>
                    </motion.div>
                </Link>
            ))}
        </div>
    )
}
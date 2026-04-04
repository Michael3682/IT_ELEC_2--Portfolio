"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import ProjectsCard from "@/components/common/ProjectsCard"

export default function RecentProjects() {
    return (
        <section className="container mx-auto px-5 md:px-0 pt-20 pb-10 space-y-8">
            <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                viewport={{ once: true, margin: "-400px" }}
            >
                <h1 className="text-4xl font-bold text-center text-primary">Recent Projects</h1>
                <p className="text-center text-primary">A selection of things I've built recently.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                <ProjectsCard limit={3} variant="smallCard" />
            </div>
            <Link className="inline-flex items-center gap-1 text-lg font-medium text-primary hover:underline" href="/projects">
                More Projects <ArrowRight strokeWidth={2} />
            </Link>
        </section>
    )
}
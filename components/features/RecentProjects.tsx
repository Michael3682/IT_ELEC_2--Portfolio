import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProjectsCard from "@/components/features/ProjectsCard"

export default function RecentProjects() {
    return (
        <section className="pt-15 space-y-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold text-center text-primary">Recent Projects</h1>
                <p className="text-center text-primary">A selection of things I've built recently.</p>
            </div>
            <div className="flex justify-between">
                <ProjectsCard limit={3} variant="smallCard" />
            </div>
            <Link className="inline-flex items-center gap-1 text-lg font-medium text-muted-foreground hover:underline" href="/projects">More Projects <ArrowRight strokeWidth={2} /></Link>
        </section>
    )
}
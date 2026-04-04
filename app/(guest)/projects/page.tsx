import ProjectsCard from "@/components/common/ProjectsCard"

export default function Projects() {
    return (
        <div className="container mx-auto px-5 md:px-0 py-20 mt-5 space-y-10">
            <h1 className="text-4xl font-bold mb-10 text-primary">Projects</h1>
            <div className="flex flex-col gap-10 w-full">
                <ProjectsCard variant="fullCard" />
            </div>
        </div>

    )
}
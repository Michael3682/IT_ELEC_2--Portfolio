import ProjectsCard from "@/components/features/ProjectsCard"

export default function Projects() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-10">Projects</h1>
            <div className="flex flex-col gap-15 w-full">
                <ProjectsCard variant="fullCard" />
            </div>
        </>
    )
}
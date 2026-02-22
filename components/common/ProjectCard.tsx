import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/constants/project"
import { Badge } from "@/components/ui/badge"

export default function ProjectCard() {
    return (
        <>
            {PROJECTS.map((project, index) => (
                <div key={project.id} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} rounded-md border border-muted hover:border-muted-foreground transition overflow-hidden`}>
                    <div className="h-full w-1/2 overflow-hidden">
                        <img className="h-full w-full object-cover" src={project.imageSrc} alt={project.title} />
                    </div>
                    <div className="px-7 py-5 flex flex-1 flex-col justify-between">
                        <div className="space-y-3">
                            <h1 className="text-5xl font-extrabold">{project.title}</h1>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-muted-foreground">Techs Used:</p>
                                <div className="space-x-2">
                                    {project.techs.map((tech) => (
                                        <Badge variant="secondary" key={tech}>{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-5 leading-relaxed">{project.description}</p>
                        </div>
                        <div className={`${index % 2 === 0 ? "self-end" : "self-start"} space-x-4`}>
                            <Button asChild>
                                <a className="w-max px-4 py-2" target="_blank" href={project.webURL}>Visit Page</a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a className="w-max px-4 py-2" target="_blank" href={project.codeURL}>View Code</a>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
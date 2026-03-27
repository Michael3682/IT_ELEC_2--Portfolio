import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/constants/project"
import { Badge } from "@/components/ui/badge"

type Variant = "fullCard" | "smallCard"

export default function ProjectsCard({ limit, variant }: { limit?: number, variant: Variant }) {
    const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS

    if (variant == "smallCard") {
        return (
            <>
                {projects.map((project) => (
                    <div key={project.id} className="w-120 rounded-md border border-muted bg-muted shadow-lg hover:border-muted-foreground transition duration-200 ease-linear overflow-hidden">
                        <div className="relative w-120 aspect-video overflow-hidden">
                            <Link className="relative block w-full h-full" target="_blank" href={project.webURL}>
                                <Image
                                    className="object-cover"
                                    src={project.imageSrc}
                                    alt={project.title}
                                    sizes="(max-width: 768px) 100vw, 480px"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className="px-5 py-3 flex flex-col justify-between gap-7">
                            <div className="space-y-2">
                                <h1 className="text-2xl font-bold text-primary">{project.title}</h1>
                                <div className="flex gap-2 items-center">
                                    <div className="space-x-2">
                                        {project.techs.map((tech) => (
                                            <Badge className="text-[10px] rounded-sm text-primary" variant="secondary" key={tech}>{tech}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-3 line-clamp-2 text-muted-foreground">{project.description}</p>
                            </div>
                            <div className="space-x-4">
                                <Button asChild>
                                    <Link className="text-xs text-secondary" target="_blank" href={project.webURL}>Visit Page</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link className="text-xs text-primary" target="_blank" href={project.codeURL}>View Code</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            {projects.map((project, index) => (
                <div key={project.id} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} w-full rounded-md border border-muted bg-muted shadow-lg hover:border-muted-foreground transition duration-200 ease-linear overflow-hidden`}>
                    <div className="relative w-1/2 aspect-video overflow-hidden">
                        <Link className="relative block w-full h-full" target="_blank" href={project.webURL}>
                            <Image
                                className="object-cover"
                                src={project.imageSrc}
                                alt={project.title}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                fill
                            />
                        </Link>
                    </div>
                    <div className="px-7 py-5 flex flex-col justify-between w-1/2">
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold text-primary">{project.title}</h1>
                            <div className="flex gap-2 items-center">
                                <div className="space-x-2">
                                    {project.techs.map((tech) => (
                                        <Badge className="rounded-sm text-primary" variant="secondary" key={tech}>{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-5 leading-relaxed text-muted-foreground">{project.description}</p>
                        </div>
                        <div className={`${index % 2 === 0 ? "self-end" : "self-start"} space-x-4`}>
                            <Button asChild>
                                <Link className="text-secondary" target="_blank" href={project.webURL}>Visit Page</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link className="text-primary" target="_blank" href={project.codeURL}>View Code</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
import { EXPERIENCES } from "@/constants/aboutme"
import { Badge } from "@/components/ui/badge"

export default function Experiences() {
    return (
        <section className="mt-15 p-10 space-y-7 rounded-md shadow-md border w-max h-max bg-muted">
            <h1 className="text-2xl font-medium pb-3 border-b text-primary">
                Experiences
            </h1>
            <div className="flex relative">
                <span className="absolute border-l border-ring h-full left-0 top-1"></span>
                <div className="space-y-7">
                    {EXPERIENCES.toReversed().map((experience, index) => (
                        <div className="space-y-1 relative pl-6" key={experience.title}>
                            <span className={`absolute -left-[5px] top-1 size-3 ${index == 0 ? "ring-2 ring-ring bg-primary" : "ring-1 ring-muted-foreground bg-secondary"} rounded-full`}></span>
                            <h1 className="font-medium text-primary">{experience.title}</h1>
                            <p className="text-sm text-muted-foreground mb-2">{experience.location}</p>
                            <Badge className="text-[10px] text-primary rounded-sm border border-ring" variant="secondary" >{experience.date}</Badge>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
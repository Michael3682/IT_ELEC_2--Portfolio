import { Badge } from "@/components/ui/badge"
import { TECHS } from "@/constants/aboutme"

export default function Techs() {
    return (
        <section className="mt-15 p-10 space-y-7 rounded-md shadow-md border w-full bg-muted">
            <h1 className="text-2xl font-medium pb-3 border-b text-primary">
                Tech Stacks
            </h1>
            {TECHS.map((tech) => (
                <div className="space-y-3" key={tech.category}>
                    <h1 className="font-medium text-primary">{tech.category}</h1>
                    <div className="space-x-2">
                        {tech.items.map((item) => (
                            <Badge className="font-normal text-primary rounded-sm cursor-pointer transition duration-100 ease-linear hover:bg-muted" variant="outline" key={item}>{item}</Badge>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
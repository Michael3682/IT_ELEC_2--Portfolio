"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { EXPERIENCES } from "@/constants/aboutme"

export default function Experiences() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="p-7 md:p-10 space-y-7 backdrop-blur-xl bg-secondary/50 rounded-md shadow-lg border w-full md:w-max"
        >
            <h1 className="md:text-2xl font-medium pb-3 border-b text-primary">
                Experiences
            </h1>
            <div className="flex relative">
                <span className="absolute border-l border-ring h-full left-0 top-1" />
                <div className="space-y-7">
                    {EXPERIENCES.toReversed().map((experience, index) => (
                        <motion.div
                            key={experience.title}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "backOut", delay: index * 0.1 }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            className="space-y-1 relative pl-6"
                        >
                            {index === 0 ? (
                                <>
                                    <span className="absolute -left-[5px] top-1 size-3 ring-2 ring-ring bg-primary rounded-full" />
                                    <span className="absolute -left-[5px] top-1 size-3 ring-2 ring-ring bg-primary rounded-full animate-ping" />
                                </>
                            ) : (
                                <span className="absolute -left-[5px] top-1 size-3 ring-1 ring-muted-foreground bg-secondary rounded-full" />
                            )}
                            <h1 className="text-sm md:text-base font-medium text-primary">{experience.title}</h1>
                            <p className="text-xs md:text-sm text-muted-foreground mb-2">{experience.location}</p>
                            <Badge className="text-[10px] text-primary rounded-sm border border-ring" variant="secondary">
                                {experience.date}
                            </Badge>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
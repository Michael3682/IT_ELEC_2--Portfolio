"use client"

import { motion } from "motion/react"
import { TECHS } from "@/constants/aboutme"
import { Badge } from "@/components/ui/badge"

export default function Techs() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="p-7 md:p-10 space-y-7 backdrop-blur-xl bg-secondary/50 rounded-md shadow-lg border w-full"
        >
            <h1 className="md:text-2xl font-medium pb-3 border-b text-primary">
                Tech Stacks
            </h1>
            {TECHS.map((tech, i) => (
                <motion.div
                    key={tech.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "backOut", delay: i * 0.1 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    className="space-y-3"
                >
                    <h1 className="text-sm md:text-base font-medium text-primary">{tech.category}</h1>
                    <div className="flex flex-wrap gap-2">
                        {tech.items.map((item, j) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Badge
                                    className="text-[10px] md:text-xs font-normal text-primary rounded-sm cursor-pointer transition duration-100 ease-linear hover:bg-muted"
                                    variant="outline"
                                >
                                    {item}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.section>
    )
}
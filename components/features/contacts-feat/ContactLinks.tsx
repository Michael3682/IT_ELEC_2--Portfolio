"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { CONTACT_LINKS } from "@/constants/contact"


export default function ContactLinks() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backOut", delay: 0.1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="p-5 bg-secondary/50 rounded-md backdrop-blur-xl border shadow-lg"
        >
            <h2 className="text-xl font-medium pb-3 mb-3 border-b text-primary">Contact Links</h2>
            <div className="space-y-3">
                {CONTACT_LINKS.map((link, index) => (
                    <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "backOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link href={link.href} target="_blank" className="flex items-center gap-4 group">
                            <div className="p-3 rounded-md border bg-background group-hover:bg-primary group-hover:border-primary transition duration-200">
                                <link.icon size={20} className="text-primary group-hover:text-secondary transition duration-200" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">{link.label}</p>
                                <p className="text-primary font-medium group-hover:underline">{link.value}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
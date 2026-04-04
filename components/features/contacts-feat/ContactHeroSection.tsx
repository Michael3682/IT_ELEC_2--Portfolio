"use client"

import { motion } from "motion/react"

export default function ContactHeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="flex flex-col gap-3 text-start"
        >
            <h1 className="text-3xl md:text-3xl font-extrabold text-primary uppercase">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </motion.div>
    )
}
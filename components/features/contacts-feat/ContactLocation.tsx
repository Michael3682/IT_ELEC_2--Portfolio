"use client"

import { motion } from "motion/react"
import { MapPin } from "lucide-react"

export default function ContactLocation() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="p-5 space-y-3 bg-secondary/50 rounded-md backdrop-blur-xl border shadow-lg"
        >
            <h2 className="text-xl font-medium pb-3 mb-3 border-b text-primary">Location</h2>
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-md border bg-background">
                    <MapPin size={20} className="text-primary" />
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Based in</p>
                    <p className="text-primary font-medium">Cebu City, Philippines</p>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125715.42149638698!2d123.82050899999999!3d10.3156992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999258b8aa6f3%3A0x2dfd1a3fdd4fc571!2sCebu%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                className="w-full h-48 rounded-md border grayscale"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </motion.section>
    )
}
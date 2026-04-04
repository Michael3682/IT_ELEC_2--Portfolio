"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

export default function AboutHeroSection() {
    return (
        <section className="flex flex-row h-full w-full items-center md:items-stretch justify-evenly md:gap-10 px-5 md:p-0 backdrop-blur-xl md:backdrop-blur-none bg-secondary/50 md:bg-transparent rounded-md shadow-lg">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="relative h-30 w-30 md:w-100 md:h-100 aspect-square drop-shadow-xl flex-shrink-0"
            >
                <Image
                    className="object-cover object-top rounded-md"
                    src="/Profile.png"
                    alt="Profile photo"
                    sizes="(max-width: 768px) 256px, 480px"
                    fill
                    priority
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "backOut", delay: 0.2 }}
                className="flex flex-col p-7 gap-3 md:gap-5 md:p-10 md:text-left md:backdrop-blur-xl md:bg-secondary/50 md:rounded-md md:shadow-lg h-full md:h-100"
            >
                <div>
                    <h1 className="text-base md:text-2xl font-bold text-primary text-start">Michael Josh O. Maranga</h1>
                    <p className="text-sm md:text-lg text-muted-foreground italic">Web Developer</p>
                </div>
                <p className="text-xs md:text-lg text-primary break-normal line-clamp-4">
                    I'm a passionate web developer dedicated to crafting intuitive, visually engaging web experiences. I thrive at the intersection of design and functionality — turning complex problems into clean, elegant solutions. With a keen eye for detail, I stay up to date with the latest technologies and best practices to bring creative ideas to life and deliver digital experiences that leave a lasting impression.
                </p>
                <Button className="w-full md:w-max cursor-pointer text-xs md:text-base text-secondary mx-auto mt-auto md:mx-0">
                    Download Resume
                </Button>
            </motion.div>
        </section>
    )
}
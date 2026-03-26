"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section className="flex items-center justify-evenly">
            <div className="max-w-120 space-y-5">
                <h1 className="text-5xl font-bold">Hey, I'm Michael</h1>
                <p className="text-lg">I'm a passionate web developer focused on crafting intuitive and visually engaging web experiences, continuously learning new technologies to bring creative ideas to life.</p>
                <div className="space-x-4">
                    <Button asChild>
                        <Link href="/projects">
                            View My Works
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/contacts">
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-120 aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                    className="object-cover object-top"
                    src="/Profile.png"
                    alt="/Profile.png"
                    fill
                />
            </div>
        </section>
    )
}
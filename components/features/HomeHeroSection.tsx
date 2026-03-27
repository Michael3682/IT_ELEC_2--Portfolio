"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomeHeroSection() {
    return (
        <section className="flex items-center justify-evenly">
            <div className="max-w-120 space-y-5">
                <h1 className="text-5xl font-bold text-primary">Hey, I'm Michael</h1>
                <p className="text-lg text-primary">I'm a passionate web developer focused on crafting intuitive and visually engaging web experiences, continuously learning new technologies to bring creative ideas to life.</p>
                <div className="space-x-4">
                    <Button asChild>
                        <Link className="text-secondary" href="/projects">
                            View My Works
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link className="text-primary" href="/contacts">
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-120 aspect-square overflow-hidden rounded-xl shadow-2xl ring-4 ring-muted">
                <Image
                    className="object-cover object-top"
                    src="/Profile.png"
                    alt="/Profile.png"
                    sizes="(max-width: 120px) 100vw, 50vw"
                    fill
                    priority
                />
            </div>
        </section>
    )
}
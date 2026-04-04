import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutHeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-evenly gap-10">
            <div className="relative h-64 md:h-100 aspect-square overflow-hidden rounded-xl shadow-2xl ring-4 ring-muted">
                <Image
                    className="object-cover object-top"
                    src="/Profile.png"
                    alt="Profile photo"
                    sizes="(max-width: 768px) 256px, 480px"
                    fill
                    priority
                />
            </div>
            <div className="flex flex-col gap-7 md:w-100 lg:w-150 text-center md:text-left">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Michael Josh O. Maranga</h1>
                    <p className="text-lg text-muted-foreground italic">Web Developer</p>
                </div>
                <p className="text-lg text-primary">I'm a passionate web developer dedicated to crafting intuitive, visually engaging web experiences. I thrive at the intersection of design and functionality — turning complex problems into clean, elegant solutions. With a keen eye for detail, I stay up to date with the latest technologies and best practices to bring creative ideas to life and deliver digital experiences that leave a lasting impression.</p>
                <Button className="w-max cursor-pointer text-secondary mx-auto md:mx-0">
                    Download Resume
                </Button>
            </div>
        </section>
    )
}
"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion, useScroll } from "motion/react"
import { useState, useEffect, useRef } from "react"
import { ModeToggle } from "@/components/common/ThemeToggle"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const words = ["michael josh maranga", "developer", "designer", "creator", "builder"]


export default function Header() {
    const pathname = usePathname()
    const { scrollYProgress } = useScroll()
    const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [display, setDisplay] = useState(words[0])
    const indexRef = useRef(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const scrambleTo = (word: string) => {
        let iterations = 0
        clearInterval(intervalRef.current!)

        intervalRef.current = setInterval(() => {
            setDisplay(
                word
                    .split("")
                    .map((char, i) =>
                        i < iterations
                            ? char
                            : CHARS[Math.floor(Math.random() * CHARS.length)]
                    )
                    .join("")
            )

            iterations += 0.5;
            if (iterations > word.length) clearInterval(intervalRef.current!)
        }, 40)
    }

    useEffect(() => {
        const loop = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % words.length;
            scrambleTo(words[indexRef.current]);
        }, 2500)


        return () => {
            clearInterval(loop)
            clearInterval(intervalRef.current!)
        }
    }, [])

    return (
        <header className="fixed w-screen z-90">
            <motion.span style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                originX: 0,
                zIndex: 99,
                backgroundColor: "var(--primary)",
            }}>
            </motion.span>
            <motion.nav
                initial={{ top: -100 }}
                animate={{ top: 0 }}
                className="fixed flex items-center justify-between w-100 md:w-full mx-auto container px-5 py-3 mt-0.5 backdrop-blur-xl rounded-xl md:border shadow-lg bg-secondary/50 left-1/2 -translate-x-1/2">
                <h1 className="text-xs md:text-sm font-bold text-primary uppercase w-max md:w-50">{display}</h1>
                <ul className="hidden md:flex items-center gap-4">
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/blogs">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <Button className="cursor-pointer text-secondary">Contact Me</Button>
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary flex md:hidden">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </motion.nav>
            {isMenuOpen && (
                <div className="fixed top-16 left-1/2 -translate-x-1/2 md:hidden container mx-auto flex flex-col gap-3 px-5 py-3 z-90 w-100 backdrop-blur-xl rounded-xl border shadow-lg bg-secondary/50">
                    <Link onClick={() => setIsMenuOpen(false)} className={`text-primary px-2 py-1 border-b border-muted-foreground/20 ${isActive("/") ? "font-medium" : ""}`} href="/">Home</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={`text-primary px-2 py-1 border-b border-muted-foreground/20 ${isActive("/about") ? "font-medium" : ""}`} href="/about">About</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={`text-primary px-2 py-1 border-b border-muted-foreground/20 ${isActive("/projects") ? "font-medium" : ""}`} href="/projects">Projects</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={`text-primary px-2 py-1 border-b border-muted-foreground/20 ${isActive("/blogs") ? "font-medium" : ""}`} href="/blogs">Blogs</Link>
                    <Button className="cursor-pointer text-secondary w-full mt-2">Contact Us</Button>
                </div>
            )}
        </header>
    )
}
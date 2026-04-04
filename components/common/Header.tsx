"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/common/ThemeToggle"
import { Menu, X } from "lucide-react"

export default function Header() {
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`py-3 fixed w-screen z-50 ${isScrolled ? "backdrop-blur-md bg-muted/50" : ""} transition duration-100 ease-linear`}>
            <nav className="flex justify-between items-center container mx-auto px-3">
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium text-primary">Michael Josh Maranga</h1>
                    <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>

                <ul className="hidden md:flex gap-4">
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/">
                            Home
                            <span className={`absolute left-0 bottom-0 h-px bg-muted-foreground transition-all duration-300 ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/about">
                            About
                            <span className={`absolute left-0 bottom-0 h-px bg-muted-foreground transition-all duration-300 ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/projects">
                            Projects
                            <span className={`absolute left-0 bottom-0 h-px bg-muted-foreground transition-all duration-300 ${isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/blogs">
                            Blogs
                            <span className={`absolute left-0 bottom-0 h-px bg-muted-foreground transition-all duration-300 ${isActive("/blogs") ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </Link>
                    </li>
                </ul>

                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <Button className="cursor-pointer text-secondary">Contact Us</Button>
                </div>

                <div className="flex md:hidden items-center gap-3">
                    <ModeToggle />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden container mx-auto pb-4 flex flex-col gap-3 mt-3 px-3">
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
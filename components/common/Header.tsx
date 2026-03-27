"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/common/ThemeToggle"

export default function Header() {
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)

    return (
        <header className="py-3 fixed w-screen bg-muted z-99">
            <nav className="flex justify-between items-center container mx-auto">
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium text-primary">Michael Josh Maranga</h1>
                    <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>
                <ul className="flex gap-4">
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/">
                            Home
                            <span className={`absolute left-0 bottom-0 h-px bg-muted-foreground transition-all duration-300 ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/about">
                            About
                            <span className={`absolute left-0 bottom-0 h-px bg-muted-foreground transition-all duration-300 ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/projects">
                            Projects
                            <span className={`absolute left-0 bottom-0 h-px bg-muted-foreground transition-all duration-300 ${isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </Link>
                    </li>
                    <li>
                        <Link className="px-2 py-1 transition relative group text-primary" href="/blogs">
                            Blogs
                            <span className={`absolute left-0 bottom-0 h-px bg-muted-foreground transition-all duration-300 ${isActive("/blogs") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button className="cursor-pointer text-secondary">Contact Us</Button>
                </div>
            </nav>
        </header>
    )
}
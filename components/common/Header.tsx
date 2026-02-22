"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/common/ThemeToggle"

export default function Header() {
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)

    return (
        <div className="py-3 border-b border-muted">
            <div className="flex justify-between items-center container mx-auto">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">Portfolio</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <Link className={`px-2 py-1 transition ${isActive("/") ? "border-b border-muted-foreground" : ""}`} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={`px-2 py-1 transition ${isActive("/about") ? "border-b border-muted-foreground" : ""}`} href="/about">About</Link>
                        </li>
                        <li>
                            <Link className={`px-2 py-1 transition ${isActive("/projects") ? "border-b border-muted-foreground" : ""}`} href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link className={`px-2 py-1 transition ${isActive("/blogs") ? "border-b border-muted-foreground" : ""}`} href="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button className="cursor-pointer">Contact Us</Button>
                </div>
            </div>
        </div>
    )
}
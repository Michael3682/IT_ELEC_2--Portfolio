import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/common/ThemeToggle"

export default function Header() {
    return (
        <header className="py-3 border-b border-muted">
            <div className="flex justify-between items-center container mx-auto">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">Portfolio</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <Link className="px-3 py-2" href="/">Home</Link>
                        </li>
                        <li>
                            <Link className="px-3 py-2" href="/about">About</Link>
                        </li>
                        <li>
                            <Link className="px-3 py-2" href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link className="px-3 py-2" href="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button className="cursor-pointer">Contact Us</Button>
                </div>
            </div>
        </header>
    )
}
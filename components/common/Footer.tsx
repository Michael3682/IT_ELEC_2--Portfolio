import Link from "next/link"
import { Facebook, Github, Twitter, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer>
            <div className="flex justify-between py-5 mx-auto container">
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Portfolio</h2>
                    <p className="text-base">Frontend Developer</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Quick Link</h2>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Blogs</h2>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link href="/">Blog 1</Link>
                        </li>
                        <li>
                            <Link href="/about">Blog 2</Link>
                        </li>
                        <li>
                            <Link href="/projects">Blog 3</Link>
                        </li>
                        <li>
                            <Link href="/blogs">Blog 4</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Contact Links</h2>
                    <ul className="flex flex-col gap-4  ">
                        <li>
                            <Link href="/">Email: michaeljoshmaranga@gmail.com</Link>
                        </li>
                        <li>
                            <Link href="/about">Phone: +63 966 796 0762</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between py-5 mx-auto container">
                <span></span>
                <p className="text-muted-foreground">© 2026 Michael Josh Maranga. All rights reserved.</p>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/">
                            <Facebook />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Twitter />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Instagram />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Github />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-5 border-t border-muted">
            <div className="flex justify-between container mx-auto">
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">Portfolio</h2>
                    <p className="text-base">Cebu, City</p>
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
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="/">Email: michaeljoshmaranga@gmail.com</Link>
                        </li>
                        <li>
                            <Link href="/about">Phone: +63 966 796 0762</Link>
                        </li>
                        <li>
                            <Link href="/projects">GitHub</Link>
                        </li>
                        <li>
                            <Link href="/blog">Facebook</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
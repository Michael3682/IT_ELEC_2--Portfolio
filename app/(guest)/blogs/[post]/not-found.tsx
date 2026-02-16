import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostNotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-2xl font-bold">Oops! This Blog Doesn't Exist.</h1>
            <p className="mt-1">Please go back to blogs page.</p>
            <Link className="mt-5" href="/blogs">
                <Button className="cursor-pointer" variant="outline">Go Back</Button>
            </Link>
        </div>
    )
}
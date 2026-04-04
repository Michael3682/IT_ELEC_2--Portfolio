"use client"

import { useRouter } from "next/navigation"
import { BLOG_POSTS } from "@/constants/blog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const getUniqueYears = () => [...new Set(BLOG_POSTS.map((post) => post.year))].sort()

const getUniqueMonths = (year: string) => [...new Set(BLOG_POSTS.filter((post) => post.year === year).map((post) => post.month))]

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export default function BlogsDate({ activeYear, activeMonth }: { activeYear?: string, activeMonth?: string }) {
    const router = useRouter()
    const years = getUniqueYears()

    return (
        <div className="flex items-center gap-4">
            <Select value={activeYear} onValueChange={(year) => router.push(`/blogs/date/${year}`)}>
                <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Select a year" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Year</SelectLabel>
                        {years.map((year) => (
                            <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select value={activeMonth} onValueChange={(month) => router.push(`/blogs/date/${activeYear}/${month}`)} disabled={!activeYear}>
                <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Select a month" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Month</SelectLabel>
                        {activeYear && getUniqueMonths(activeYear).map((month) => (
                            <SelectItem key={month} value={month}>{capitalize(month)}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
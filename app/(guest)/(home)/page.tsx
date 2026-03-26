import RecentBlogs from "@/components/features/RecentBlogs"
import RecentProjects from "@/components/features/RecentProjects"
import HeroSection from "@/components/features/HeroSection"

export default function Home() {
    return (
        <div className="space-y-7">
            <HeroSection />
            <RecentProjects/>
            <RecentBlogs/>
        </div>
    )
}
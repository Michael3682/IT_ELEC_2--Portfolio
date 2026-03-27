import RecentBlogs from "@/components/features/RecentBlogs"
import RecentProjects from "@/components/features/RecentProjects"
import HomeHeroSection from "@/components/features/HomeHeroSection"

export default function Home() {
    return (
        <div className="space-y-20">
            <HomeHeroSection />
            <RecentProjects/>
            <RecentBlogs/>
        </div>
    )
}
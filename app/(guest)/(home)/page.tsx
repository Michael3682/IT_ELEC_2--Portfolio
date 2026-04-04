import RecentBlogs from "@/components/features/home-feat/RecentBlogs"
import RecentProjects from "@/components/features/home-feat/RecentProjects"
import HomeHeroSection from "@/components/features/home-feat/HomeHeroSection"

export default function Home() {
    return (
        <div>
            <HomeHeroSection />
            <div className="relative z-10">
                <RecentProjects />
                <RecentBlogs />
            </div>
        </div>
    )
}
import Techs from "@/components/features/about-feat/Techs"
import Experiences from "@/components/features/about-feat/Experiences"
import AboutHeroSection from "@/components/features/about-feat/AboutHeroSection"

export default function About() {
    return (
        <div className="container mx-auto px-5 md:px-0 py-20 mt-5 space-y-10">
            <AboutHeroSection />
            <div className="flex flex-col md:flex-row gap-7">
                <Techs />
                <Experiences />
            </div>
        </div>
    )
}
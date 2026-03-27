import Techs from "@/components/features/Techs"
import Experiences from "@/components/features/Experiences"
import AboutHeroSection from "@/components/features/AboutHeroSection"

export default function About() {
    return (
        <div className="space-y-20">
            <AboutHeroSection />
            <div className="flex gap-7">
                <Techs />
                <Experiences />
            </div>
        </div>
    )
}
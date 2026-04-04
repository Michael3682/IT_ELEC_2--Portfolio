"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import TiltedCard from "@/components/ui/TiltedCard"

gsap.registerPlugin(ScrollTrigger)

export default function HomeHeroSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const nameRef = useRef<HTMLDivElement>(null)
    const nameOverlayRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current || !nameRef.current || !cardRef.current) return
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=400",
                    pin: true,
                    scrub: 1
                }
            })

            tl.to(cardRef.current, {
                opacity: 0,
                yPercent: 50,
                ease: "none",
            }, 0)

            tl.to([nameRef.current, nameOverlayRef.current], {
                opacity: 0,
                yPercent: -50,
                ease: "none",
            }, 0.1)

            gsap.from(cardRef.current, {
                height: 0,
                scale: 0
            })

            gsap.from([nameRef.current, nameOverlayRef.current], {
                width: 0,
                duration: .8
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="flex items-end justify-center w-screen h-screen relative">
            <div ref={nameRef} className="absolute top-70 text-center pointer-events-none z-10 w-max will-change-transform">
                <h1 className="text-3xl md:text-[7rem] font-extrabold text-primary uppercase break-all truncate">
                    michael josh maranga
                </h1>
            </div>
            <div ref={cardRef} className="will-change-transform z-20 relative">
                <TiltedCard
                    imageSrc="/Profile.png"
                    altText="Michael Josh Maranga"
                    captionText="Contact Me"
                    containerHeight="clamp(450px, 40vw, 650px)"
                    containerWidth="clamp(450px, 40vw, 650px)"
                    imageHeight="clamp(450px, 40vw, 650px)"
                    imageWidth="clamp(450px, 40vw, 650px)"
                    rotateAmplitude={0}
                    scaleOnHover={1}
                    showTooltip
                    showMobileWarning={false}
                />
            </div>
            <div ref={nameOverlayRef} className="absolute top-70 text-center pointer-events-none z-30 w-max will-change-transform">
                <h1 className="text-3xl md:text-[7rem] font-extrabold text-transparent md:text-outline uppercase break-all truncate">
                    michael josh maranga
                </h1>
            </div>

        </section>
    )
}
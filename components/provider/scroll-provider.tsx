"use client"

import Lenis from "lenis"
import { gsap } from "gsap"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname()
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        })

        lenisRef.current = lenis

        lenis.on("scroll", ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.destroy()
            gsap.ticker.remove(lenis.raf)
            lenisRef.current = null
        }
    }, [])

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true, force: true })
        } else {
            window.scrollTo({ top: 0 })
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
    }, [pathname])

    return <>{children}</>
}
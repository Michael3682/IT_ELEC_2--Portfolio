"use client"

import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import LineWaves from "@/components/ui/LineWaves"

export default function Layout({ children }: { children: Readonly<React.ReactNode> }) {
    return (
        <>
            <Header />
            <main>
                <div className="fixed w-full h-full inset-0 -z-10 bg-background">
                    <LineWaves
                        speed={0.2}
                        innerLineCount={40}
                        outerLineCount={40}
                        warpIntensity={0.5}
                        rotation={-45}
                        edgeFadeWidth={0}
                        colorCycleSpeed={1}
                        brightness={0.1}
                        color1="#ffffff"
                        color2="#ffffff"
                        color3="#ffffff"
                        enableMouseInteraction
                        mouseInfluence={2}
                    />
                </div>
                {children}
            </main>
            <Footer />
        </>
    )
}
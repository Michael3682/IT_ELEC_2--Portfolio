import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

export default function Layout({ children }: { children: Readonly<React.ReactNode> }) {
    return (
        <>
            <Header />
            <main className="flex-1 container mx-auto my-6 py-6">
                {children}
            </main>
            <Footer />
        </>
    )
}
import Footer from "@/components/Footer"
import MobileMenu from "@/components/MobileMenu"
import Navbar from "@/components/Navbar"

export default function MainLayout({ children }) {
    return (
        <>
            <MobileMenu />
            <Navbar />
            <main className="min-h-svh flex flex-col gap-4">
                {children}
            </main>
            <Footer />
        </>
    )
}

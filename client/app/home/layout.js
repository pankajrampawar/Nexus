import SearchSection from "../ui/SearchSection"
import Sidebar from "../ui/Sidebar"
import NavBar from "../ui/Navbar"


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-slate-50 xl:flex justify-center h-full">
                <div className="flex flex-col sm:flex-row sm:h-screen sm:overflow-hidden gap-10">
                    <header className="sm:overflow-y-auto ">
                        <nav className="sm:hidden">
                            <NavBar/>
                        </nav>
                        <nav className="hidden sm:flex min-w-[300px] max-w-[500px] h-full">
                            <Sidebar/>
                        </nav>
                    </header>

                    <main className="overflow-hidden relative h-full"> 
                            {children}
                    </main>

                    <section className="hidden xl:flex">
                        <SearchSection/>
                    </section>
                </div>
            </body>
        </html>
    )
}
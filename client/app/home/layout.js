import NavBar from "../ui/Navbar"
import Sidebar from "../ui/Sidebar"


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="sm:flex sm:h-screen sm:overflow-hidden gap-10">
                <header className="sm:overflow-y-auto ">
                    <nav className="md:hidden">
                        <NavBar/>
                    </nav>
                    <nav className="min-w-[300px] bg-slate-300">
                        <Sidebar/>
                    </nav>
                </header>

                <main className="sm:overflow-y-auto"> 
                    {children}
                </main>
            </body>
        </html>
    )
}
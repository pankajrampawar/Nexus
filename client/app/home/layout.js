import NavBar from "../ui/Navbar"
import Sidebar from "../ui/Sidebar"


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-slate-50">
                <div className="flex flex-col sm:flex-row sm:h-screen sm:overflow-hidden gap-10">
                    <header className="sm:overflow-y-auto ">
                        <nav className="md:hidden">
                            <NavBar/>
                        </nav>
                        <nav className="hidden sm:flex sm:min-w-[300px] sm:max-w-[500px] sm:h-full">
                            <Sidebar/>
                        </nav>
                    </header>

                    <main className="sm:overflow-y-auto"> 
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
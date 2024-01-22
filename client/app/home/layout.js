import NavBar from "../ui/Navbar"
import Sidebar from "../ui/Sidebar"


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav className="md:hidden">
                        <NavBar/>
                    </nav>
                    <nav>
                        <Sidebar/>
                    </nav>
                </header>

                <main> 
                    {children}
                </main>
            </body>
        </html>
    )
}
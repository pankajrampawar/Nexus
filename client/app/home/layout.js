import NavBar from "../ui/Navbar"



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <NavBar/>
                    </nav>
                </header>

                <main> 
                    {children}
                </main>
            </body>
        </html>
    )
}
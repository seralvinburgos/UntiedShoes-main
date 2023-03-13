import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function RootLayout() {
    

    return (
        <div className="root-layout">
            <main>
                <Navbar />
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}
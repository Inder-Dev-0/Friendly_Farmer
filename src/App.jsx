import AuthNavbar from "./components/AuthNavbar"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router"

function App() {
  return (
    <>
      <Navbar />
      {/* <AuthNavbar /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App

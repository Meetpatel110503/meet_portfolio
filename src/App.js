import React, { useContext, useEffect, useState } from "react"
import About from "./views/About"
import Contact from "./views/Contact"
import Navbar from "./components/Navbar"
import Projects from "./views/Projects"
import Skills from "./views/Skills"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Loader from "./components/Loader"
import Experience from "./views/Experience"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Cursor from "./components/Cursor"
import "./App.css"
import ArticlesSection from "./views/ArticlesSection"
import { initGA, logPageView } from "./Analytics"
import "./i18n"
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext"
import WhatsAppButton from "./components/WhatsAppButton"

export default function App() {
  useEffect(() => {
    initGA()
    logPageView()
  }, [])

  const { darkMode } = useContext(DarkModeContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader darkMode={darkMode} />
  }

  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ArticlesSection />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />

      {/* <Cursor /> */}
      <ToastContainer
        position='top-right'
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </main>
  )
}

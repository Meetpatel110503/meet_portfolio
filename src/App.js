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
import { DarkModeContext } from "./context/DarkModeContext"
import WhatsAppButton from "./components/WhatsAppButton"
import ChatbotComponent from "./components/Chatbot"

export default function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  const handleWhatsAppClick = () => {
    setIsChatbotVisible(!isChatbotVisible)
  }

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

    const onScroll = () => {
      if (window.pageYOffset > 3300) {
        setIsButtonVisible(true)
      } else {
        setIsButtonVisible(false)
        setIsChatbotVisible(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  if (loading) {
    return <Loader darkMode={darkMode} />
  }

  return (
    <main
      className={`${
        darkMode ? "dark" : ""
      } bg-gray-100 dark:bg-gray-900 min-h-screen`}
    >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ArticlesSection />
      <Contact />
      <Footer />
      <ScrollToTop />

      <ChatbotComponent
        isVisible={isChatbotVisible}
        toggleChatbot={handleWhatsAppClick}
      />
      <WhatsAppButton
        onClick={handleWhatsAppClick}
        isVisible={isButtonVisible}
      />

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

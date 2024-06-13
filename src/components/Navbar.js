import React, { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import { FaArrowRight, FaSun, FaMoon, FaBars } from "react-icons/fa"
import { DarkModeContext } from "../context/DarkModeContext"
import LanguageSelector from "./LanguageSelector"
import "./Navbar.css"

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <header
      className={`md:sticky top-0 z-10 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
        <div className='flex justify-between w-full md:w-auto'>
          <a className='title-font font-medium  md:mb-0' href='#about'>
            <span
              className={`ml-3 text-xl ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <span>MEET</span> <span className='text-green-400'>PATEL</span>
            </span>
          </a>
          <div className='lg:hidden  md:ml-72 md:pl-64 title-font font-medium  '>
            <button
              onClick={toggleDarkMode}
              className={`  items-center text-base   ${
                darkMode
                  ? " text-gray-300 hover:text-white"
                  : " text-gray-700 hover:text-black"
              }`}
            >
              {darkMode ? (
                <FaSun className='w-4 h-4' />
              ) : (
                <FaMoon className='w-4 h-4' />
              )}
            </button>
            <button className='text-xl ml-4 ' onClick={toggleMenu}>
              <FaBars
                className={`${darkMode ? "text-white" : "text-black"} w-4 h-4`}
              />
            </button>
          </div>
        </div>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex flex flex-col lg:flex-row  text-base  w-full md:w-auto  p-2`}
        >
          <a
            href='#projects'
            className={`mr-5 ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {t("Past Work")}
          </a>
          <a
            href='#skills'
            className={`mr-5 ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {t("Skills")}
          </a>
          <a
            href='#experience'
            className={`mr-5 ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {t("Experience")}
          </a>
          <a
            href='#articles'
            className={`mr-5 ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {t("Articles")}
          </a>
        </nav>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-center text-base justify-center w-full md:w-auto`}
        >
          <div className='hidden lg:flex items-center space-x-4'>
            <button
              onClick={toggleDarkMode}
              className={`inline-flex items-center border-0 py-1 px-6 focus:outline-none rounded text-base ${
                darkMode
                  ? " text-gray-300 hover:text-white"
                  : " text-gray-700 hover:text-black"
              }`}
            >
              {darkMode ? (
                <FaSun className='w-4 h-4' />
              ) : (
                <FaMoon className='w-4 h-4' />
              )}
            </button>
          </div>
          <div className='flex items-center  '>
            <LanguageSelector darkMode={darkMode} />
            <a
              href='#contact'
              className={` inline-flex items-center py-1 px-6 focus:outline-none rounded text-base  md:mt-0 ${
                darkMode
                  ? " text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {t("Hire Me")}
              <FaArrowRight className='w-4 h-4 ml-1' />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

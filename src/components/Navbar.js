import React from "react"
import { FaArrowRight, FaSun, FaMoon } from "react-icons/fa"

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <>
      <header
        className={`md:sticky top-0 z-10 ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='title-font font-medium mb-4 md:mb-0'>
            <a
              href='#about'
              className={`ml-3 text-xl ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <span>MEET</span> <span className='text-green-400'>PATEL</span>
            </a>
          </a>

          <nav
            className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center ${
              darkMode ? "md:border-gray-700" : "md:border-gray-200"
            }`}
          >
            <a
              href='#projects'
              className={`mr-5 ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              Past Work
            </a>
            <a
              href='#skills'
              className={`mr-5 ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              Skills
            </a>
            <a
              href='#experience'
              className={`mr-5 ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              Experience
            </a>
            <a
              href='#articles'
              className={`mr-5 ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              Articles
            </a>
          </nav>

          <button
            onClick={toggleDarkMode}
            className={`inline-flex items-center mr-4  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0`}
          >
            {darkMode ? (
              <FaSun className='w-4 h-4' />
            ) : (
              <FaMoon className='w-4 h-4' />
            )}
          </button>
          <nav>
            <a
              href='#contact'
              className={`inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0`}
            >
              Hire Me
              <FaArrowRight className='w-4 h-4 ml-1' />
            </a>
          </nav>
        </div>
      </header>
      
      
    </>
  )
}

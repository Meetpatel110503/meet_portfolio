import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { ReactTyped } from "react-typed"
import { DarkModeContext } from "../context/DarkModeContext"
import { motion } from "framer-motion"

export default function About() {
  const { darkMode } = useContext(DarkModeContext)
  const { t } = useTranslation()

  return (
    <section id='about' className={`${darkMode ? "bg-black" : "bg-white"}`}>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center '>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1
            className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {t("greeting")}&nbsp;
            <ReactTyped
              strings={[t("name"), t("designation")]}
              typeSpeed={100}
              backSpeed={120}
              loop
            />
            .
          </h1>
          <h1
            className={`hidden lg:inline-block title-font sm:text-3xl text-2xl mb-4 font-medium ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {t("subdescription")}
          </h1>
          <p
            className={`mb-8 leading-relaxed  ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {t("description")}
          </p>
          <div className='flex justify-center'>
            <a
              href='mailto:meetpatel110503@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
            >
              {t("connect")}
            </a>
            <a
              href='/assets/resume.pdf'
              target='_blank'
              download='resume.pdf'
              className={`ml-4 inline-flex ${
                darkMode
                  ? "text-gray-400 bg-gray-900"
                  : "text-gray-700 bg-gray-100"
              } border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg`}
            >
              {t("cv")}
            </a>
          </div>
        </div>
        <motion.div
          className='lg:max-w-md lg:w-full md:w-1/2 w-5/6'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            className='object-cover object-center bg-transparent rounded-3xl border-0'
            alt='hero'
            src='/assets/meet.jpg'
          />
        </motion.div>
      </div>
    </section>
  )
}

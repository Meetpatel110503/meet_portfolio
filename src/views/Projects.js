import React, { useState, useContext } from "react"
import { FaCode, FaExternalLinkAlt } from "react-icons/fa"
import { projects } from "../data"
import { useInView } from "react-intersection-observer"
import { useTranslation } from "react-i18next"
import { DarkModeContext } from "../context/DarkModeContext"

export default function Projects() {
  const { darkMode } = useContext(DarkModeContext)
  const { t } = useTranslation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visibleProjects, setVisibleProjects] = useState(4)

  const handleLoadMore = () => {
    setVisibleProjects((prevCount) => prevCount + 2)
  }

  return (
    <section
      id='projects'
      className={`body-font ${
        darkMode ? "text-gray-400 bg-black" : "text-gray-700 bg-white"
      }`}
    >
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {t("projectsTitle")}
          </h1>
          <p
            className={`lg:w-2/3 mx-auto leading-relaxed text-base ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {t("projectsDescription")}
          </p>
        </div>
        <div className={`flex flex-wrap -m-4`} ref={ref}>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              className='sm:w-1/2 w-full p-4 transform transition duration-300 hover:scale-105 '
              key={project.link}
            >
              <div
                className={`flex relative transform transition-all duration-600 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.3}s` }}
              >
                <div
                  className={`px-8 py-10 relative w-full border-none rounded ${
                    darkMode ? " bg-gray-900" : " bg-gray-100"
                  } h-auto`}
                >
                  <h2 className='tracking-widest text-sm title-font font-medium text-green-500 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1
                    className={`title-font text-lg font-medium mb-3 ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h1>
                  <p className={darkMode ? "text-gray-400" : "text-gray-700"}>
                    {t(project.description)}
                  </p>
                  <div className='mt-4 flex justify-between'>
                    <a
                      href={project.source_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`border border-none p-2 m-2 rounded hover:text-green-500 text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      <FaCode className='inline-block mr-2' />
                      {t("source_code")}
                    </a>
                    <a
                      href={project.demo_link}
                      target='_blank'
                      rel='noreferrer'
                      className={`border border-none p-2 m-2 rounded hover:text-green-500 text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      <FaExternalLinkAlt className='inline-block mr-2' />
                      {t("live_demo")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className='flex justify-center mt-8'>
            <button
              onClick={handleLoadMore}
              className={`text-green-500 bg-transparent  border border-green-500 py-2 px-6 hover:text-green-600 hover:border-green-600 rounded text-lg`}
            >
              {t("Load more")}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

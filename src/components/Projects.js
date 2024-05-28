import { FaCode } from "react-icons/fa"
import React from "react"
import { projects } from "../data"
import { useInView } from "react-intersection-observer"

export default function Projects({ darkMode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  return (
    <section
      id='projects'
      className={`body-font ${
        darkMode ? "text-gray-400 bg-black" : "text-gray-700 bg-white"
      }`}
    >
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <FaCode
            className={`mx-auto inline-block w-10 mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          />
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Projects I've Built
          </h1>
          <p
            className={`lg:w-2/3 mx-auto leading-relaxed text-base ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            I've worked on a variety of projects over the years and I'm proud of
            the progress I've made. Many of these projects are open-source and
            available for others to explore and contribute to.
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {projects.map((project, index) => (
            <a
              href={project.link}
              target='_blank'
              key={project.link}
              className='sm:w-1/2 w-full p-4 transform transition duration-300 hover:scale-105 hover:z-10'
            >
              <div
                className={`flex relative transform transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                ref={ref}
              >
                <div
                  className={`px-8 py-10 relative  w-full border-4 ${
                    darkMode
                      ? "border-gray-800 bg-gray-900"
                      : "border-gray-200 bg-gray-100"
                  }`}
                >
                  <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
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
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { PiStudentBold } from "react-icons/pi"
import React from "react"
import { experiences } from "../data"
import { FaGraduationCap, FaBriefcase } from "react-icons/fa"
import { useInView } from "react-intersection-observer"

export default function Experience({ darkMode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id='experience'
      className={`${
        darkMode ? "text-gray-400 bg-black" : "text-gray-700 bg-white"
      } body-font h-full`}
    >
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-20'>
          <PiStudentBold
            className={`inline-block mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          />
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Experience & Education
          </h1>
          <p
            className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            I'm passionate about pushing the boundaries of what's possible and
            inspiring the next generation of innovators.
          </p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
          {experiences.map((exp, index) => (
            <div
              ref={ref}
              className={`p-2 md:w-1/2 w-full transform transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              key={index}
            >
              <div
                className={`h-full flex items-start ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                } p-8 rounded-lg`}
              >
                <div
                  className={`flex-grow pl-6 border-l-4 ${
                    exp.type === "education"
                      ? "border-green-500"
                      : "border-blue-500"
                  }`}
                >
                  <h2 className='font-medium title-font text-lg'>
                    {exp.type === "education" ? (
                      <FaGraduationCap className='inline-block mr-2' />
                    ) : (
                      <FaBriefcase className='inline-block mr-2' />
                    )}
                    {exp.title}
                  </h2>
                  <h3
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {exp.year}
                  </h3>
                  <p className='leading-relaxed'>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

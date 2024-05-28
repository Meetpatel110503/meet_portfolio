import { LuBadgeCheck } from "react-icons/lu"
import { GiSkills } from "react-icons/gi"
import React from "react"
import { skills } from "../data"
import { useInView } from "react-intersection-observer"

export default function Skills({ darkMode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  return (
    <section
      id='skills'
      className={`${
        darkMode ? "text-gray-400 bg-black" : "text-gray-700 bg-white"
      } body-font h-full`}
    >
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-20'>
          <GiSkills
            className={`inline-block mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          />
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Skills &amp; Technologies
          </h1>
          <p
            className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Chronological collection of my long-form thoughts on programming,
            leadership, product design, and more.
          </p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
          {skills.map((skill, index) => (
            <div
              ref={ref}
              key={skill.name}
              className={`p-2 md:w-1/2 w-full transform transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                } rounded flex p-4 h-full items-center`}
              >
                <LuBadgeCheck
                  className={`w-6 h-6 flex-shrink-0 mr-4 ${
                    darkMode ? "text-green-400" : "text-green-500"
                  }`}
                />
                <div className='flex-grow'>
                  <span
                    className={`${
                      darkMode ? "text-white" : "text-black"
                    } title-font font-medium`}
                  >
                    {skill.name}
                  </span>
                  <div className='w-full bg-gray-300 rounded-full h-1.5 mt-2'>
                    <div
                      className={`${
                        darkMode ? "bg-green-400" : "bg-green-500"
                      } h-1.5 rounded-full`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <span
                  className={`ml-4 ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

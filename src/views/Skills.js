import React, { useContext } from "react"
import { LuBadgeCheck } from "react-icons/lu"
import { skills } from "../data"
import { useInView } from "react-intersection-observer"
import { useTranslation } from "react-i18next"
import { DarkModeContext } from "../context/DarkModeContext"

export default function Skills() {
  const { darkMode } = useContext(DarkModeContext)
  const { t } = useTranslation()
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
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {t("skillsTitle")}
          </h1>
          <p
            className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {t("skillsDescription")}
          </p>
        </div>
        <div
          className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 '
          ref={ref}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-2 md:w-1/2 w-full transform transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div
                className={`${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                } rounded flex p-4 h-full items-center`}
              >
                <LuBadgeCheck
                  className={`w-6 h-6 flex-shrink-0 mr-4 ${
                    darkMode ? "text-green-500" : "text-green-500"
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
                  <div className='w-full bg-gray-300 rounded-full h-1.5 mt-2 relative overflow-hidden'>
                    <div
                      className={`${
                        darkMode ? "bg-green-500" : "bg-green-500"
                      } h-1.5 rounded-full absolute top-0 left-0`}
                      style={{
                        width: inView ? `${skill.percentage}%` : "0",
                        transition: "width 3s ease",
                      }}
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

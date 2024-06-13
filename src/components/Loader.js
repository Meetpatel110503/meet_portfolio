import React, { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

export default function Loader() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div
      className={`flex space-x-2 justify-center items-center h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <span className='sr-only'>Loading...</span>
      <div
        className={`h-8 w-8 rounded-full animate-bounce ${
          darkMode ? "bg-white" : "bg-black"
        } animation-delay-300ms`}
      ></div>
      <div
        className={`h-8 w-8 rounded-full animate-bounce ${
          darkMode ? "bg-white" : "bg-black"
        } animation-delay-150ms`}
      ></div>
      <div
        className={`h-8 w-8 rounded-full animate-bounce ${
          darkMode ? "bg-white" : "bg-black"
        }`}
      ></div>
    </div>
  )
}

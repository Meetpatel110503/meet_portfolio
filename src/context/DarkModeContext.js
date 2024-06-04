import React, { createContext, useState, useEffect } from "react"

const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode")
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (savedTheme === "true") {
      return true
    } else if (savedTheme === "false") {
      return false
    } else {
      return prefersDarkMode
    }
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white")
      document.body.classList.remove("bg-white", "text-black")
    } else {
      document.body.classList.add("bg-white", "text-black")
      document.body.classList.remove("bg-gray-900", "text-white")
    }
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode)

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeContext, DarkModeProvider }

import React from "react"
import { useTranslation } from "react-i18next"

const LanguageSelector = ({ darkMode }) => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  // Define languages with their code, label, and icon
  const languages = [
    { code: "en", label: "English", icon: "🇺🇸" },
    { code: "gr", label: "German", icon: "🇩🇪" },
    // Add more languages as needed
  ]

  return (
    <div className='inline-block'>
      <div>
        <button
          type='button'
          className={`inline-flex items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-transparent text-sm font-medium focus:outline-none ${
            darkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-700 hover:text-black"
          }`}
          onClick={() => changeLanguage(i18n.language === "en" ? "gr" : "en")}
        >
          {languages.find((lang) => lang.code === i18n.language)?.icon}{" "}
          {t(languages.find((lang) => lang.code === i18n.language)?.label)}
        </button>
      </div>
    </div>
  )
}

export default LanguageSelector

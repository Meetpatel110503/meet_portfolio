// src/i18n.js
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "./locales/en/translation.json"
import translationGR from "./locales/gr/translation.json"

const resources = {
  en: { translation: translationEN },
  gr: { translation: translationGR },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: [
      "localStorage",
      "navigator",
      "querystring",
      "cookie",
      "sessionStorage",
      "htmlTag",
      "path",
      "subdomain",
    ],
  },
})

export default i18n

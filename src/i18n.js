// src/i18n.js
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "./locales/en/translation.json"
import translationGR from "./locales/gr/translation.json"
// import translationVI from "./locales/vi/translation.json"
// import translationZH from "./locales/zh/translation.json"
// import translationGU from "./locales/gu/translation.json"

const resources = {
  en: { translation: translationEN },
  gr: { translation: translationGR },
  //   vi: { translation: translationVI },
  //   zh: { translation: translationZH },
  //   gu: { translation: translationGU },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
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

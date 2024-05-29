import React, { useState } from "react"
import { articles } from "../data"
import { useInView } from "react-intersection-observer"
import { useTranslation } from "react-i18next"

export default function Articles({ darkMode }) {
  const { t } = useTranslation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visibleArticles, setVisibleArticles] = useState(3)

  const handleLoadMore = () => {
    setVisibleArticles((prev) => prev + 3)
  }

  return (
    <section
      id='articles'
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
            {t("articleTitle")}
          </h1>
          <p
            className={`lg:w-2/3 mx-auto leading-relaxed text-base ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {t("articleDescription")}
          </p>
        </div>
        <div className='flex flex-wrap -m-4 ' ref={ref}>
          {articles.slice(0, visibleArticles).map((article, index) => (
            <div
              key={article.id}
              className={`sm:w-1/3 w-full p-4 transform transition duration-300 hover:scale-105 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <div
                className={`flex flex-col relative  ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                } rounded-lg h-full`}
              >
                <img
                  className='w-full h-48 object-cover object-center rounded-t-lg'
                  alt='article'
                  src={article.imageUrl}
                />
                <div className='p-4 flex flex-col flex-grow'>
                  <h2
                    className={`text-md font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-700 pb-4"
                    } `}
                  >
                    {article.title}
                  </h2>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    } flex-grow`}
                  >
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    target='_blank'
                    rel="noreferrer"
                    className={`mt-3 text-green-500 hover:text-green-600 inline-flex items-center self-end`}
                  >
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleArticles < articles.length && (
          <div className='flex justify-center mt-8'>
            <button
              onClick={handleLoadMore}
              className={`text-green-500 bg-transparent  border border-green-500 py-2 px-6      hover:text-green-600 hover:border-green-600 rounded text-lg`}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

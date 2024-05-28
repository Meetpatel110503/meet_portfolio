import React, { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.location.pathname !== "#about") {
        if (window.pageYOffset > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <div
          className='fixed bottom-8 right-8 z-10 border rounded-full mb-14 p-2'
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <FaArrowUp size={16} color='#4CAF50' />
        </div>
      )}
    </>
  )
}

export default ScrollToTop

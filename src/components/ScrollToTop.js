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
          className='fixed  bottom-6 right-8 z-10 border rounded-full mb-14 p-2'
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            color='#25D366'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='feather feather-chevron-up'
          >
            <polyline points='18 15 12 9 6 15'></polyline>
          </svg>
        </div>
      )}
    </>
  )
}

export default ScrollToTop

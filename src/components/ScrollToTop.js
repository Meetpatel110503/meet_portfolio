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
          className='fixed  bottom-8 right-8 z-10 border  mb-14 p-2'
          onClick={scrollToTop}
          style={{
            cursor: "pointer",
            backgroundColor: "#72CAC6",
            padding: "5px",
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            id='Expand-2--Streamline-Ultimate'
            height='24'
            width='24'
          >
            <desc>Expand 2 Streamline Icon: https://streamlinehq.com</desc>
            <path
              stroke='#000000'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M23.25 0.748047 0.75 23.248'
              stroke-width='1.5'
            ></path>
            <path
              stroke='#000000'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M23.25 7.49805V0.748047H16.5'
              stroke-width='1.5'
            ></path>
            <path
              stroke='#000000'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M0.75 16.498v6.75H7.5'
              stroke-width='1.5'
            ></path>
            <path
              stroke='#000000'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M0.75 0.748047 23.25 23.248'
              stroke-width='1.5'
            ></path>
            <path
              stroke='#000000'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M0.75 7.49805V0.748047H7.5'
              stroke-width='1.5'
            ></path>
            <path
              stroke='#000000'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M23.25 16.498v6.75H16.5'
              stroke-width='1.5'
            ></path>
          </svg>
        </div>
      )}
    </>
  )
}

export default ScrollToTop

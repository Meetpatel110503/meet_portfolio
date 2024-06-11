import React, { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.location.pathname !== "#about") {
        if (window.pageYOffset > 3300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const openWhatsApp = () => {
    window.open("https://wa.me/9173378175", "_blank")
  }

  return (
    <>
      {" "}
      {isVisible && (
        <div
          className='fixed bottom-20 right-8 z-10 border rounded-full mb-14 p-2'
          onClick={openWhatsApp}
          style={{ cursor: "pointer" }}
        >
          <FaWhatsapp size={18} color='#25D366' />
          <span
            style={{
              position: "absolute",
              top: 5,
              right: 8,
              width: 7,
              height: 7,
              backgroundColor: "green",
              borderRadius: "50%",
            }}
          />
        </div>
      )}
    </>
  )
}

export default WhatsAppButton

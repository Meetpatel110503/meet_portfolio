import React, { useEffect, useState } from "react"
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md"

const WhatsAppButton = ({ onClick, isVisible }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 3300) {
        setIsButtonVisible(true)
      } else {
        setIsButtonVisible(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {isButtonVisible && (
        <div
          className='fixed bottom-20 right-8 z-50 border rounded-full mb-14 p-2 cursor-pointer  shadow-lg'
          onClick={onClick}
        >
          <MdOutlineMarkUnreadChatAlt size={24} color='#25D366' />
        </div>
      )}
    </>
  )
}

export default WhatsAppButton

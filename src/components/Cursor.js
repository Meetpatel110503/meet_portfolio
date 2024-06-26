import React, { useEffect, useState } from "react"
import "./Cursor.css"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div
      className='cursor'
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  )
}

export default Cursor

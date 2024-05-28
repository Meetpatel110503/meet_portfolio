import React from "react"
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-700"
      } body-font`}
    >
      <div className='container p-5  mx-auto flex items-center sm:flex-row flex-col'>
        <p className='text-sm text-center sm:text-left'>
          © 2024 Meet Patel — All Rights Reserved.
        </p>
        <div className='flex mt-4 sm:mt-0 sm:ml-auto justify-center sm:justify-start'>
          <a
            href='https://www.instagram.com/meetpatel1153?igsh=MTNpeG1ocTdwOTMxcg=='
            target='_blank'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2'
          >
            <FaInstagram size={24} />
          </a>
          <a
            href='https://github.com/Meetpatel110503'
            target='_blank'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/meet-patel-644ba923a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            target='_blank'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2'
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

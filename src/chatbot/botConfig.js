import { createChatBotMessage } from "react-chatbot-kit"
import React from "react"

const botName = "Meet Patel"

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi there! I'm ${botName}. How can I assist you today?`
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      height: "fit-content",
      maxWidth: "70vw",
      borderRadius: "8px",
      overflow: "hidden",
      wordWrap: "break-word",
    },
    chatInput: {
      backgroundColor: "yellow",
    },
    chatButton: {
      backgroundColor: "#6CD372",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => (
        <div className='flex flex-col items-start mt-2.5'>
          <button
            onClick={() => props.actionProvider.handleSkills()}
            className='bg-blue-500 text-white border-none px-5 py-2.5 text-center text-base cursor-pointer rounded w-auto max-w-xs my-1'
          >
            My Skills
          </button>
          <button
            onClick={() => props.actionProvider.handleProjects()}
            className='bg-blue-500 text-white border-none px-5 py-2.5 text-center text-base cursor-pointer rounded w-auto max-w-xs my-1'
          >
            My Projects
          </button>
          <button
            onClick={() => props.actionProvider.handleContact()}
            className='bg-blue-500 text-white border-none px-5 py-2.5 text-center text-base cursor-pointer rounded w-auto max-w-xs my-1'
          >
            Contact Me
          </button>
        </div>
      ),
    },
  ],
}

export default config

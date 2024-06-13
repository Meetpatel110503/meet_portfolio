import React from "react"
import Chatbot from "react-chatbot-kit"
import "react-chatbot-kit/build/main.css"
import ActionProvider from "../chatbot/ActionProvider"
import config from "../chatbot/botConfig"
import MessageParser from "../chatbot/MessageParser"

const ChatbotComponent = ({ isVisible, toggleChatbot }) => {
  return (
    <>
      {isVisible && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={toggleChatbot}
        ></div>
      )}
      <div
        className={`fixed bottom-48 right-9 z-50 ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </>
  )
}

export default ChatbotComponent

import FileSaver from "file-saver"

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  handleGreeting = () => {
    const greetingMessage = this.createChatBotMessage(
      "How can I assist you today?"
    )
    this.addMessageToState(greetingMessage)
    const optionsMessage = this.createChatBotMessage(
      "You can ask about my skills, projects, or how to contact me.",
      {
        widget: "options",
      }
    )
    this.addMessageToState(optionsMessage)
  }

  handleSkills = () => {
    const message = this.createChatBotMessage(
      <div>
        <p>Here are some of my skills:</p>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Material-UI</li>
          <li>Next.js</li>
          <li>Redux</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    )
    this.addMessageToState(message)
  }

  handleProjects = () => {
    const message = this.createChatBotMessage(
      <div>
        <p>Here are some of my project:</p>
        <ul>
          <li>Hotel Management System</li>
          <li>Product management</li>
          <li>Weather app</li>
          <li>E-shop</li>
          <li>Post management system</li>
        </ul>
      </div>
    )
    this.addMessageToState(message)
  }

  handleContact = () => {
    const message = this.createChatBotMessage(
      <div>
        <p>You can contact me via:</p>
        <ul>
          <li>
            <a
              href='https://wa.me/9173378175'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-green-600   mx-2'
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/meet-patel-644ba923a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-green-600   mx-2'
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p>Feel free to reach out me for any inquiries.</p>
      </div>
    )

    this.addMessageToState(message)
  }

  handleUnknown = () => {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't understand that. Please ask about my skills, projects, or how to contact me."
    )
    this.addMessageToState(message)
  }

  handleOk = () => {
    const message = this.createChatBotMessage("Ok, thanks for letting me know!")
    this.addMessageToState(message)
  }

  handleThank = () => {
    const message = this.createChatBotMessage("Your Welcome.Visit Again.")
    this.addMessageToState(message)
  }
  handleAge = () => {
    const message = this.createChatBotMessage("21")
    this.addMessageToState(message)
  }

  handleAvailable = () => {
    const message = this.createChatBotMessage(
      "Feel free to leave a message in my contact page, and I'll get back to you as soon as possible."
    )
    this.addMessageToState(message)
  }

  handleAbout = () => {
    const message = this.createChatBotMessage(
      "I am a software developer passionate about creating innovative solutions."
    )
    this.addMessageToState(message)
  }

  handleName = () => {
    const message = this.createChatBotMessage("My name is Meet Patel")
    this.addMessageToState(message)
  }

  handleWelcome = () => {
    const message = this.createChatBotMessage(
      "Appreciate it! Feel free to reach out if you need anything."
    )
    this.addMessageToState(message)
  }

  handleResume = () => {
    try {
      const resumeUrl = "./assets/resume.pdf"
      const message = this.createChatBotMessage(
        <div>
          <p>Click the button below to download:</p>
          <button
            onClick={() => FileSaver.saveAs(resumeUrl, "meet_patel.pdf")}
            className='bg-blue-500 text-white border-none px-5 py-2.5 text-center text-base cursor-pointer rounded w-auto max-w-xs my-1'
          >
            meet_patel.pdf
          </button>
        </div>
      )
      this.addMessageToState(message)
    } catch (error) {
      console.error("Error downloading resume:", error)
      const errorMessage = this.createChatBotMessage(
        "Oops! There was an error while downloading the resume. Please try again later."
      )
      this.addMessageToState(errorMessage)
    }
  }

  addMessageToState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }
}

export default ActionProvider

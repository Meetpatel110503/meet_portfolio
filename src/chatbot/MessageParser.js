class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()

    if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
      this.actionProvider.handleGreeting()
    } else if (lowerCaseMessage.includes("skill")) {
      this.actionProvider.handleSkills()
    } else if (lowerCaseMessage.includes("project")) {
      this.actionProvider.handleProjects()
    } else if (lowerCaseMessage.includes("contact")) {
      this.actionProvider.handleContact()
    } else if (
      lowerCaseMessage.includes("ok") ||
      lowerCaseMessage.includes("yes")
    ) {
      this.actionProvider.handleOk()
    } else if (lowerCaseMessage.includes("thank")) {
      this.actionProvider.handleThank()
    } else if (lowerCaseMessage.includes("age")) {
      this.actionProvider.handleAge()
    } else if (lowerCaseMessage.includes("available")) {
      this.actionProvider.handleAvailable()
    } else if (
      lowerCaseMessage.includes("about") ||
      lowerCaseMessage.includes("yourself")
    ) {
      this.actionProvider.handleAbout()
    } else {
      this.actionProvider.handleUnknown()
    }
  }
}

export default MessageParser

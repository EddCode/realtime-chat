import { useState} from 'react'
import { sendMessage } from '../api'
import ChatHistory from '../Components';

const Chat = ({ history }) => {
  const [chatHistory, setChatHistory] = useState([])

  const saveHistory = msg => {
    setChatHistory(prev => {
      prev.push(msg)
      return prev
    })
  }

  const send = _ => {
    const msg = "hello"
    saveHistory(msg)
    sendMessage(msg)
  }

  const goToHome = () => history.push('/')

  return (
    <div className="App">
      <p onClick={goToHome}>Alo world</p>
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>send super message</button>
    </div>
  )
}

export default Chat

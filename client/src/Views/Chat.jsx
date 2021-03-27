import { useContext, useState} from 'react'
import { sendMessage } from '../api'
import ChatHistory from '../Components';

import {UserContext} from '../Context/user';

const Chat = ({ history }) => {
  const [chatHistory, setChatHistory] = useState([])

  const user = useContext(UserContext)

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
      <p onClick={goToHome}>Alo { user.username }</p>
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>send super message</button>
    </div>
  )
}

export default Chat

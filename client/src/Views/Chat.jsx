import {useEffect, useState} from 'react'
import {ws, sendMessage} from '../api'
import ChatHistory from '../Components';

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([])

  useEffect(_ => ws(saveHistory), [])

  const saveHistory = msg => {
    setChatHistory(prev => {
      prev.push(msg)
      return prev
    })
  }

  const send = _ => sendMessage("hello")


  return (
    <div className="App">
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>send super message</button>
    </div>
  )
}

export default Chat

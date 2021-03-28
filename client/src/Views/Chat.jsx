import { useContext, useState} from 'react'
import { sendMessage } from '../api'
import { makeAcctionOnEnter } from '../helpers'

// Components
import ChatHistory from '../Components';

// Context
import { UserContext } from '../Context/user';

const Chat = ({ history }) => {
  const [chatHistory, setChatHistory] = useState([])
  const [message, setMessage] = useState('')

  const user = useContext(UserContext)

  // ==================================
  const handleChangeMsg = (evt) => setMessage(evt.target.value)

  const handleKeyUp = (evt) => makeAcctionOnEnter(evt, send)

  // ==================================

  const saveHistory = msg => {
    setChatHistory(prev => {
      prev.push(msg)
      return prev
    })
  }

  const send = _ => {
    saveHistory(message)
    sendMessage(message)
    setMessage('')
  }

  const goToHome = () => history.push('/')

  return (
    <div className="App">
      <p onClick={goToHome}>Alo { user.username }</p>
      <ChatHistory chatHistory={chatHistory} />
      <div>
        <input type="text" value={message} onChange={handleChangeMsg} onKeyUp={handleKeyUp}/>
        <button onClick={send}>send super message</button>
      </div>
    </div>
  )
}

export default Chat

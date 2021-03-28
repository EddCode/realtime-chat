import { useContext, useEffect, useState } from "react";
import { ws, sendMessage  } from '../api'
import { makeAcctionOnEnter } from '../helpers'

// Styles
import style from './Home.module.css'

// Context
import { UserContext } from '../Context/user'

const Home = ({ history }) => {
  const [username, setUsername] = useState('')

  const userContext = useContext(UserContext)

  useEffect(() => ws(), [])

  // ====================================================
  const goToChat = () => history.push("/chat");

  const handleChange = (evt) => {
    setUsername(evt.target.value)
  }

  const handleKeyUp = (evt) => makeAcctionOnEnter(evt, startChat)

  const startChat = _ => {
    userContext.setUsername = username
    sendMessage(JSON.stringify({username}))
    goToChat()
  }

  return (
    <section className={style.container}>
      <h1> Enter your username</h1>
      <div>
        <input type="text" placeholder="Write your username" value={username} onKeyUp={handleKeyUp} onChange={handleChange}/>
        <input type="button" value="Send" onClick={startChat}/>
      </div>
    </section>
  );
};

export default Home;

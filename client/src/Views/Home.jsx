import {useEffect} from "react";
import { sendMessage  } from '../api'

const Home = ({ history }) => {
  const goToChat = () => history.push("/chat");

  useEffect(() => {
    const username = {username: 'Edgar figueroa'}
    sendMessage(JSON.stringify(username))
  }, [])

  return (
    <>
      <h1>Hello World imported</h1>
      <p onClick={goToChat}>Alo world</p>
    </>
  );
};

export default Home;

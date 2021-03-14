const Home = ({ history }) => {
  const goToChat = () => history.push("/chat");

  return (
    <>
      <h1>Hello World imported</h1>
      <p onClick={goToChat}>Alo world</p>
    </>
  );
};

export default Home;

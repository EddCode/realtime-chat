const ChatHistory = props => {

	const messages = props.chatHistory.map(msg => (
		<p key={msg}>{msg.data}</p>
	))

	return (
		<div>
			<h2>Chat History</h2>
			{messages}
		</div>
	)
}

export default ChatHistory

import React, {useState} from 'react'

export const UserContext = React.createContext('')

const UserProvider = (props) => {
	const [usernameContext, setUsernameContext] = useState('')

	const user = {
		get username() {
			return usernameContext
		},
		set setUsername(username) {
			setUsernameContext(username)
		}
	}

	return (
		<UserContext.Provider value={user}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserProvider

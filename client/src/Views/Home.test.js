import 'react-router-dom'
import Home from './Home'

import {fireEvent, render } from '@testing-library/react'

import { UserContext } from '../Context/user'

describe("<Home />", () => {
  const mockHistoryPush = jest.fn()
  const pushHistory = jest.fn()

  const userMock = jest.fn()

  let HomeComponent

  beforeEach(() => {

    userMock.mockImplementation(() => ({
      setUsername: ''
    }))

    mockHistoryPush.mockImplementation(() => ({
      push: pushHistory
    }))


    HomeComponent  = render(
		<UserContext.Provider value={userMock()}>
        <Home history={mockHistoryPush()} />
		</UserContext.Provider>
   )
  })

  it("Home render", () => {

    HomeComponent.getByText("Enter your username")
    HomeComponent.getByPlaceholderText("Write your username")

    const sendBtn = HomeComponent.getByText('Send')
    console.log(mockHistoryPush().push())

    fireEvent.click(sendBtn)
    pushHistory.mockReturnValueOnce('/chat')
    expect(pushHistory).toHaveBeenCalledWith('/chat')
  })
})

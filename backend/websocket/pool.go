package websocket

import (
	"fmt"
)

type Pool struct {
	Register   chan *Client
	Unregister chan *Client
    Clients    map[string]*Client
	Broadcast  chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
        Clients:    make(map[string]*Client),
		Broadcast:  make(chan Message),
	}
}

func (pool *Pool) Start() {
	for {
		select {
		case clientRegister := <-pool.Register:
            pool.Clients[clientRegister.Id] = clientRegister
            fmt.Println(len(pool.Clients))
            fmt.Println(pool.Clients)

			for _, client := range pool.Clients {
				client.Conn.WriteJSON(Message{Type: 1, Body: "New User Joined...", User: client.Username})
			}
			break
		case client := <-pool.Unregister:
			delete(pool.Clients, client.Id)

			for _, client := range pool.Clients {
				client.Conn.WriteJSON(Message{Type: 1, Body: "User Disconected..."})
			}
            break
		case message := <-pool.Broadcast:
            fmt.Printf("Clients in pool connection %v", pool.Clients)
			for _, client := range pool.Clients {
				if err := client.Conn.WriteJSON(message); err != nil {
					fmt.Println(err)
					return
				}
			}
            break
		}
	}
}

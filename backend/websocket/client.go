package websocket

import (
	"fmt"
	"log"

	"github.com/gorilla/websocket"
)

type Client struct {
    Id string
    Username string `json:username`
	Conn     *websocket.Conn
	Pool     *Pool
}

type Message struct {
	Type int    `json:type`
	Body string `json:body`
    User string `json:user`
}

func (client *Client) Read() {
	defer func() {
		client.Pool.Unregister <- client

        if r := recover(); r != nil {
            log.Println("Some error to recive message", r)
        }

		client.Conn.Close()
	}()

    fmt.Printf("Before enter to infinit loop \n")
	for {
        fmt.Printf("Before enter to infinit loop \n")
		messageType, p, err := client.Conn.ReadMessage()
        fmt.Printf("MessageType %d \n", messageType)

		if err != nil {
            panic(err)
		}

		message := Message{Type: messageType, Body: string(p), User: client.Username}

        fmt.Printf("Client send message %v \n", client)
		client.Pool.Broadcast <- message
	}

}

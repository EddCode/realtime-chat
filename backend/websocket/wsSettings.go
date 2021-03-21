package websocket

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var Upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
    Upgrader.CheckOrigin = func(r *http.Request)( bool){ return true }
	conn, err := Upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	return conn, nil
}

func Reader(conn *websocket.Conn) {
	for {
		messageType, message, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		fmt.Println(string(message))

		if err := conn.WriteMessage(messageType, message); err != nil {
			log.Println(err)
			return
		}

	}
}

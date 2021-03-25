package middelware

import (
	"fmt"
	"log"
	"net/http"

	ws "github.com/EddCode/realtime-chat/websocket"
)

func JsonErrorReader()  {
    if recov := recover(); recov != nil {
        log.Print("Some error recoverd", recov)
    }
}

func serveWs(pool *ws.Pool, w http.ResponseWriter, r *http.Request) {
	conn, err := ws.Upgrade(w, r)
    defer JsonErrorReader()
    defer conn.Close()

	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &ws.Client{
        Username: "Edgar Fig",
		Conn: conn,
		Pool: pool,
	}

   // if err := conn.ReadJSON(client); err != nil {
   //     panic(err)
   // }

	pool.Register <- client
	client.Read()
}

func ServerWs(w http.ResponseWriter, r *http.Request) {
	pool := ws.NewPool()
	go pool.Start()

	serveWs(pool, w, r)
}

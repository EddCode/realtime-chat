package middelware

import (
	"fmt"
	"net/http"

	"github.com/EddCode/realtime-chat/utils"
	ws "github.com/EddCode/realtime-chat/websocket"
)


func serveWs(pool *ws.Pool, w http.ResponseWriter, r *http.Request) {
	conn, err := ws.Upgrade(w, r)

    defer utils.JsonErrorReader()
    defer conn.Close()

	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &ws.Client{
        Id: utils.GenerateUuid(),
		Conn: conn,
		Pool: pool,
	}

    if err := conn.ReadJSON(client); err != nil {
    }

	pool.Register <- client
	client.Read()
}

func ServerWs(w http.ResponseWriter, r *http.Request) {
	pool := ws.NewPool()
	go pool.Start()

	serveWs(pool, w, r)
}

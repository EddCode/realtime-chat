package middelware

import (
	"fmt"
	"net/http"

	ws "github.com/EddCode/realtime-chat/websocket"
)

func serveWs(pool *ws.Pool, w http.ResponseWriter, r *http.Request) {
	conn, err := ws.Upgrade(w, r)

	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &ws.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()

}

func ServerWs(w http.ResponseWriter, r *http.Request) {
	pool := ws.NewPool()
	go pool.Start()

	serveWs(pool, w, r)
}

package middelware

import (
	"fmt"
	"log"
	"net/http"

	ws "github.com/EddCode/realtime-chat/websocket"
)

func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Simple Server sample")
}

func ServerWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)
	socket, err := ws.Upgrader.Upgrade(w, r, nil)

	if err != nil {
		log.Println(err)
	}

	ws.Reader(socket)
}

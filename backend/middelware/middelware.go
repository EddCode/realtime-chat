package middelware

import (
	"fmt"
	"log"
	"net/http"

	"github.com/EddCode/realtime-chat/settings"
)

func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Simple Server")
}

func ServerWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)
	ws, err := settings.Upgrader.Upgrade(w, r, nil)

	if err != nil {
		log.Println(err)
	}

	settings.Reader(ws)
}

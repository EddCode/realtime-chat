package main

import (
	"fmt"
	"net/http"

	"github.com/EddCode/realtime-chat/middelware"
)

func setUpRoutes() {
	http.HandleFunc("/ws", middelware.ServerWs)
}

func main() {
	fmt.Println("Chat App v0.0.1")
	setUpRoutes()
	http.ListenAndServe(":5000", nil)
}

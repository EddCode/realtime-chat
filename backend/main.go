package main

import (
	"net/http"

	"github.com/EddCode/realtime-chat/middelware"
)

func setUpRoutes() {
	http.HandleFunc("/", middelware.Home)
}

func main() {
	setUpRoutes()
	http.ListenAndServe(":5000", nil)
}

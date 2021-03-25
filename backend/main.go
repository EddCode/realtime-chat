package main

import (
	"fmt"
	"log"
	"net/http"
    "os"

	"github.com/EddCode/realtime-chat/middelware"
	"github.com/joho/godotenv"
)

func setUpRoutes() {
	http.HandleFunc("/ws", middelware.ServerWs)
}

func main() {

    if err := godotenv.Load(); err != nil {
        log.Fatal("Error loading .env file")
    }

    port := os.Getenv("PORT")

	fmt.Println("Chat App v0.0.1")
	setUpRoutes()

    if err := http.ListenAndServe(":"+port, nil); err != nil {
        log.Fatal(err)
    }
}

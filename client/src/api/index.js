const socket = new WebSocket("ws://localhost:5000/ws")

export const ws = cb => {

  socket.onmessage = msg => cb(msg)

  socket.onclose = event => console.log("Socket closed:", event)

  socket.onerror = error => console.error("Socker Error:", error)
}

export const sendMessage = msg => socket.send(msg)

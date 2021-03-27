const  socket = new WebSocket('ws://localhost:5000/ws')

export const ws = _ => {

  socket.onmessage = msg => msg

  socket.onclose = event => console.log("Socket closed:", event)

  socket.onerror = error => console.error("Socker Error:", error)
}

export const sendMessage = msg => socket.send(msg)

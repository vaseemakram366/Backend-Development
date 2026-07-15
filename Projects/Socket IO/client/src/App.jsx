import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

function App() {
  useEffect(() => {
    const socket = io('http://localhost:3000')

    socket.on('connect', () => {
      console.log('User connected:', socket.id)
    })

    socket.on('Ronaldo', (msg) => {
      console.log(msg)
    })

    socket.on("sending to all",(data)=>{
      console.log(data);
      
    })

    socket.emit("sending to all frontend","Hello for all (fronend)")

    socket.on("receive-message",(data)=>{
      io.emit("")
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div>App</div>
  )
}

export default App
import express from "express"
import { Server } from "socket.io";
import {createServer} from "http"

const PORT = 3000
const app = express();

const server = createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5174"
    }
})


io.on("connection",(socket)=>{
    console.log("User Connected:",socket.id)

    // socket.emit("message","Aur Bhaii ki haal hai")

    // io.emit("sendingtoall","Hello for all")

    socket.on("sendingtoallfrontend",(msg)=>{
        io.emit("receive-message",msg)
    })
})


server.listen(PORT,()=>{
    console.log(`App is running on port : ${PORT}`)
})
import express from "express"
import { Server } from "socket.io";
import {createServer} from "http"


const PORT = 3000
const app = express();



const server = createServer(app)

const io = new Server(server,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log("User connected:",socket.id);

    // socket.emit("Ronaldo","Greatest of all time")

    // io.emit("sending to all","Hello for all")

    socket.on("sending to all frontend",(msg)=>{
        io.emit("receive-message",msg)
    })
    
})



server.listen(PORT,()=>{
    console.log(`App is runnig on port : ${PORT}`);
    
})
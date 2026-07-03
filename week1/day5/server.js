import express from "express"
import connectDb from "./database/mongodb.js"

const app = express()

const port = 4000

connectDb()

app.listen(port, ()=>{
    console.log('server has started on port :', port);
    
})
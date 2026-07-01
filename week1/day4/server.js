import express from "express";
import route from "./routes/userRoute.js";

const app = express();

app.use(express.json());

app.use(route);

const port = 5000;

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to backend</h1>")
})

app.listen(port,()=>{
    console.log("Server is running on port",port);
})
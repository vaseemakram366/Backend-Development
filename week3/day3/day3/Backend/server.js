import express from 'express'
import cors from 'cors'
const app = express()

import connectDb from './database/mogodb.js'
import router from './routes/userRoute.js'

const port = 4000


app.use(cors({
    origin:'*',
    methods:['GET', 'POST' , 'PUT', 'DELETE']
}))


app.use(express.json())

app.use(router)

connectDb()


app.listen(port, ()=>{
    console.log('server is running on port', port)
})

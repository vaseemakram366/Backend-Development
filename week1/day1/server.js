// const http = require('http')

import http from 'http';

const port = 3000


const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('<h1>welcome to backend server.</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>this is about page</h1>')
    } else if (req.url === '/contact/mobile'){
        res.end('<h1>this is contact page</h1>')
    } else if (req.url === '/home'){
        res.end('<h1>this is home page</h1>')
    }
    else {
        res.end('<h1>no data found</h1>')
    }

})

server.listen(port, ()=>{
    console.log('server is listen in port:', port);
    
})
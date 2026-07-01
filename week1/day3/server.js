import express from 'express'


const app = express()

const port = 3000

app.use(express.json())


// import cors from 'cors'

// app.use(cors({
//     origin:'*'
// }))



// app.get('/', (req,res)=>{
//     res.send("<h1>Welcome to Backend...</h1>")
// })




// app.get('/about', (req,res)=>{
//     res.send('<h1>This is About Page</h1>')
// })





// let students = [
//     {
//         name:'Ankit',
//         age:27

//     },
//     {
//         name:'Rahul',
//         age:23
//     },
//     {
//         name:'Priya',
//         age:40
//     }
// ]


let students = ['ankit', 'Rahul', 'Priya']




// app.get('/getuser', (req, res) => {

//     console.log('first');
//     res.json({
//         data: students,
//         success: true,
//         message: 'data fetched successfully'
//     })
// })


// app.get('/updateuser', (req,res)=>{
//     console.log('object');
// })


// app.post('/createuser', (req, res) => {
//     const {name} = req.body

//     console.log(name)

//     students.push(name)

    

//     res.json({
//         success: true,
//         message: 'data create successfully',
//         data:students
//     })
// })




//   console.log(students)


// app.put()     


// app.delete()

// app.delete('/deleteuser', (req,res)=>{
//     const {name} = req.body
    
//     const index = students.indexOf(name)

//     students.splice(index, 1)

//     res.json({
//         massage:'user deleted successfully..',
//         success:true,
//         data:students    })
// })





// API 1 'page/job'

// API 2 'page/contact'



app.listen(port, () => {
    console.log('server is running in port : ', port)
}) 


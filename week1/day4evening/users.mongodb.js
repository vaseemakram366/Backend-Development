use("users")


//CREATE
db.employees.insertOne(
    {
        name:"Joy",
        age:20,
        salary:12345,
        email:"joy1234@gmail.com"
    }
)

// db.employees.insertMany(
//     [
//         {
//             name:"Joy",
//             age:21,
//             salary:50256,
//             email:"joy123@gmail.com"

//         },
//         {
//             name:"Victor",
//             age:17,
//             salary:9076,
//             email:"victor123@gmail.com"

//         },
//         {
//             name:"Tom",
//             age:18,
//             salary:67542,
//             email:"tom123@gmail.com"

//         }
//     ]
// )



//READ


//READ
// db.employees.findOne({_id: ObjectId('6a46292a864282f4ac306f5b')})


//UPDATE 

// db.employees.updateOne({name:"Alex"},{$set:{salary:1234567}})

// db.employees.updateMany({name:"Joy"},{$set:{salary:50000}})

//DELETE

// db.employees.deleteOne({name:"Victor"})

// db.employees.deleteMany({name:"Joy"})
import employee from "../database/data.js";


// GET

const getUser = (req, res) => {

    try {

        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data: employee
        })

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch data",
            error
        })

    }

}


// // POST

// const createUser=(req,res)=>{

//     try{

//         employee.push(req.body);

//         res.status(201).json({

//             success:true,
//             message:"User created successfully",

//             data:employee

//         })

//     }

//     catch(error){

//         res.status(500).json({

//             success:false,

//             message:"Failed to create user",

//             error

//         })

//     }

// }



// // PUT

// const updateUser=(req,res)=>{

//     try{

//         const id=req.params.id;

//         employee[id]=req.body;

//         res.status(200).json({

//             success:true,

//             message:"User updated successfully",

//             data:employee

//         })

//     }

//     catch(error){

//         res.status(500).json({

//             success:false,

//             message:"Failed to update user",

//             error

//         })

//     }

// }



// // DELETE

// const deleteUser=(req,res)=>{

//     try{

//         const id=req.params.id;

//         employee.splice(id,1);

//         res.status(200).json({

//             success:true,

//             message:"User deleted successfully",

//             data:employee

//         })

//     }

//     catch(error){

//         res.status(500).json({

//             success:false,

//             message:"Failed to delete user",

//             error

//         })

//     }

// }

const createUser = (req, res) => {
    const { name, email, empId } = req.body;

    if (!name || !email || !empId) {
        res.json({
            success: false,
            message: "should include the name, email and the empId"
        })
    }
}

employee.push({ name, email, empId })

res.json({
    success: true,
    message: "user created successfully"

})

const updateUser = (req, res) => {
    const { empId, name } = req.body;
    if (!empId || !name) {
        res.status(400).json({
            success: false,
            message: "needed empId and name"
        })
    }
}

let user = employee.find((value) => value.empId)

if (!user) {
    res.json({
        success: false,
        message: "user doesn't exists"
    })
}

user.name = name;

res.json({
    success: true,
    message: "user updated",
    data: employee
})

const deleteUser = (req, res) => {
    const { empId } = req.body;
    if(!empId) {
        res.status(400).json({
            success: false,
            message: "needed empId"
        })
    }
}

employee = employee.filter((value) => value.empId != empId)
res.json({
    success: true,
    message: "user is deleted"
})



export {

    getUser,

    createUser,

    updateUser,

    deleteUser

}
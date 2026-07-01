import employee from "../database/data.js";


// GET

const getUser = (req,res)=>{

    try{

        res.status(200).json({
            success:true,
            message:"Data fetched successfully",
            data:employee
        })

    }

    catch(error){

        res.status(500).json({
            success:false,
            message:"Failed to fetch data",
            error
        })

    }

}


// POST

const createUser=(req,res)=>{

    try{

        employee.push(req.body);

        res.status(201).json({

            success:true,
            message:"User created successfully",

            data:employee

        })

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:"Failed to create user",

            error

        })

    }

}



// PUT

const updateUser=(req,res)=>{

    try{

        const id=req.params.id;

        employee[id]=req.body;

        res.status(200).json({

            success:true,

            message:"User updated successfully",

            data:employee

        })

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:"Failed to update user",

            error

        })

    }

}



// DELETE

const deleteUser=(req,res)=>{

    try{

        const id=req.params.id;

        employee.splice(id,1);

        res.status(200).json({

            success:true,

            message:"User deleted successfully",

            data:employee

        })

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:"Failed to delete user",

            error

        })

    }

}


export {

    getUser,

    createUser,

    updateUser,

    deleteUser

}
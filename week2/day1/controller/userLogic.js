import User from "../model/user.js";


// CREATE
const createUser = async(req,res)=>{

    try {
        const {name, email, empId} = req.body

        if (!name || !email || !empId){
            return res.status(404).json({
                message:'data not found'
            })
        }

        // data creation ....

        const user = await User.create({name, email, empId})

        console.log(user);

        // send response to user

        res.status(200).json({
            success:true,
            message:'data created successfully...',
            user
        })
        
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'data has not created',error
        })
        
    }
}


// READ
const getUser = async (req,res)=>{

    try {
        const user = await User.find()

        if (!user){
            return res.status(404).json({
                message:'data not found..',
                success:false
            })
        }
        res.status(200).json({
            success:true,
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'server error', error

        })
    }

}

// UPDATE
const updateUser = (req, res) => {
    try {
        let name 
        
    } catch (error) {
        
    }
}
export {createUser, getUser, updateUser}
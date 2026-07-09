
import User from '../model/user.js'
import bcrypt from 'bcrypt'


// CREATE
const createUser = async (req, res) => {

    try {

        const { name, email, password } = req.body

        console.log(name, email, password)


        if (!name || !email) {
            return res.status(404).json({
                message: 'data not found'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        
        const user = await User.create({
            name,
            email,
            password: hash
        })

        // send response to user

        res.status(200).json({
            success: true,
            message: 'data created successfully...',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'data has not created', error
        })
    }
}


//READ
const getUser = async (req, res) => {
    try {
        const user = await User.find()

        if (!user) {
            return res.status(404).json({
                message: 'data not found...',
                success: false
            })
        }

        res.status(200).json({
            success: true,
            user,
            message: 'data fetched successfully...'
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'server error', error
        })
    }
}

// UPDATE
const updateUser = async (req, res) => {
    try {
        const { name, email, empId } = req.body

        let { userid } = req.params

        let user = await User.findById(userid)

        if (!user) {
            return res.status(404).json({
                message: 'user not found...',
                success: false
            })
        }

        let updatedUser = user


        if (name) {
            updatedUser = await User.findByIdAndUpdate(userid, { name }, { new: true })
        }

        if (email) {
            updatedUser = await User.findByIdAndUpdate(userid, { email }, { new: true })

        }

        if (empId) {
            updatedUser = await User.findByIdAndUpdate(userid, { empId }, { new: true })

        }


        res.status(200).json({
            message: 'data updated successfully...',
            updateUser,
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: 'failed to updated data internal server error',
            success: false
        })
    }
}


// DELETE
const deleteUser = async (req, res) => {
    try {
        const { userid } = req.params

        let deleteduser = await User.findByIdAndDelete(userid)

        res.status(200).json({
            success: true,
            message: 'user deleted successfully....',
            deleteUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to delete user'
        })
    }

}


export { createUser, getUser, updateUser, deleteUser }
import express from 'express'
import { createUser, getUser, updateUser,deleteUser } from '../controller/userLogic.js'



const router = express.Router()

router.post('/createuser', createUser)
router.get('/getuser', getUser)
router.put('/updateuser', updateUser)
router.delete('/deleteuser/:userid', deleteUser)

export default router
import express from 'express'
import { createUser, getUser, updateUser } from '../controller/userLogic.js'



const router = express.Router()

router.post('/createuser', createUser)
router.get('/getuser', getUser)
router.put('/updateuser', updateUser)

export default router
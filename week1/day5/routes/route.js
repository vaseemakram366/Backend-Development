import express from 'express'
import { createUser, getUser } from '../controller/userLogic.js'


const router = express.Router()

router.post('/createuser', createUser)
router.get('/getuser', getUser)

export default router
import express from 'express'
import { createUser } from '../controller/userLogic.js'

const router = express.Router()

router.post('/createuser', createUser)

export default router
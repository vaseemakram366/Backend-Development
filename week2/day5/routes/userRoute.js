import express from 'express'
import { signup } from '../controllers/userLogic.js'

const router = express.Router()


router.post('/signup', signup)

export default router
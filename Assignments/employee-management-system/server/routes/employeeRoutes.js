// will build API here and do connection here!

import express from 'express'; // api create karne ke liye
import { createUser, deleteUser, getUser, updateUser } from '../controller/user.controller.js';

const router = express.Router()

router.post('/createUser', createUser)
router.get('/getUser', getUser)
router.put('/updateUser/:userId', updateUser)
router.delete('/deleteUser/:userId', deleteUser)

export default router
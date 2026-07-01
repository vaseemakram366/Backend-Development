import express from "express";
import { getUser } from "../controller/userLogic.js";

const route = express.Router()

route.get('/getuser', getUser)

export default route
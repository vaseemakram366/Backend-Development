import express from "express";

import {

    getUser,

    createUser,

    updateUser,

    deleteUser

} from "../controller/userLogic.js";


const route=express.Router();


// GET

route.get("/getuser",getUser);


// POST

route.post("/createuser",createUser);


// PUT

route.put("/updateuser/:id",updateUser);


// DELETE

route.delete("/deleteuser/:id",deleteUser);


export default route;
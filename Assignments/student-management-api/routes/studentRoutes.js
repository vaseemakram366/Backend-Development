import express from "express";

import {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

// Create Student
router.post("/", createStudent);

// Get All Students
router.get("/", getAllStudents);

// Get Student By ID
router.get("/:id", getStudentById);

// Update Student
router.put("/:id", updateStudent);

// Delete Student
router.delete("/:id", deleteStudent);

export default router;
const students = require("../models/studentModel");


// Read All Students
const getStudents = (req, res) => {
    res.json(students);
};


// Create Student
const createStudent = (req, res) => {

    const { name, age, gender } = req.body;

    students.push({
        name,
        age,
        gender
    });

    res.status(201).json({
        message: "Student Added Successfully",
        students
    });

};


// Update Student
const updateStudent = (req, res) => {

    const index = req.params.id;

    if (index >= students.length) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    const { name, age, gender } = req.body;

    students[index] = {
        name,
        age,
        gender
    };

    res.json({
        message: "Student Updated Successfully",
        students
    });

};


// Delete Student
const deleteStudent = (req, res) => {

    const index = req.params.id;

    if (index >= students.length) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student Deleted Successfully",
        students
    });

};


module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
};
const express = require("express");
const students = require("./students");

const app = express();

app.use(express.json());


// Read All Students
app.get("/students", (req, res) => {
    res.json(students);
});


// Create Student
app.post("/students", (req, res) => {

    const { name } = req.body;

    students.push(name);

    res.json({
        message: "Student Added Successfully",
        students
    });

});


// Update Student
app.put("/students/:index", (req, res) => {

    const index = req.params.index;

    const { name } = req.body;

    if (index >= students.length) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    students[index] = name;

    res.json({
        message: "Student Updated Successfully",
        students
    });

});


// Delete Student
app.delete("/students/:index", (req, res) => {

    const index = req.params.index;

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

});



app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
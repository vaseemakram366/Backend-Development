import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Student Management API is Running...");
});

// Student Routes
app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
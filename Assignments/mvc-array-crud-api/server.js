const express = require("express");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.use("/", studentRoutes);

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/employeeManagementSystem")
        console.log("Database connected successfully.."); 
        
    } catch (error) {
        console.log(`Failed to connect Database ${error}`)
        process.exit(1) // mongoose apna process band kar dega jo connection kar rha  tha
    }
}


export default connectDB;
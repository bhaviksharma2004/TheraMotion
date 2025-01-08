import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://bhaviksharma13dec:bhavik123@cluster0.abz8s.mongodb.net/theramotion");
        console.log("MongoDB Connected");
    } catch (err) {
        console.log("Error: ", err.message);
    }
};
export default connectDB;
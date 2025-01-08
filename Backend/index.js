import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = "8081";

// Generic Middlewares
app.use(express.json());

// Resolving CORS Policy
app.use("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST, DELETE, OPTIONS"
    );
    next();
});


// Custom Middlewares



// Call to connect database
connectDB().
    then(() => {
        app.listen(port, () => {
            console.log("Server running on port: ", port);
        });
    })
    .catch((err) => {
        console.log("Database Connection failed", err);
    })
import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./db/connectDB.js";
import addFeedbackRouter from "./controllers/addFeedback.controllers.js";
import getFeedbackRouter from "./controllers/getFeedback.controllers.js";
import addAdminRouter from "./controllers/addAdmin.controllers.js";

const app = express(); 
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: ["http://localhost:5173", "https://67f50c68d94f4b34ffebb5d2--feedback-frontend-project.netlify.app/"], // frontend URLs allowed
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
};

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB()

app.use("/AddFeedBack", addFeedbackRouter)
app.use("/GetFeedBack", getFeedbackRouter)
app.use("/AddAdmin", addAdminRouter)

app.listen(port, ()=>{
    console.log(`Server is running of port ${port}`)
});
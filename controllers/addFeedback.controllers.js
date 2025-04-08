import express from "express"
import AddFeedback from "../models/addFeedback.models.js";
const router = express.Router();

router.post("/add-feedback", async(req, res)=>{
    const { fullName, email, feedback } = req.body;
    if(!fullName){
        throw new Error("FullName is required")
    }
    if(!email){
        throw new Error("email is required")
    }
    if(!feedback){
        throw new Error("Feed back is required")
    }
    const newFeedback = await AddFeedback.create({
        fullName,
        email,
        feedback
    })

    res.status(200).json({ data: newFeedback })
})

export default router
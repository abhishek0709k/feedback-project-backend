import express from "express"
import AddFeedback from "../models/addFeedback.models.js";

const router = express.Router();

router.get("/get-feedbacks", async(req, res)=>{
    const allfeedbacks = await AddFeedback.find({}).select("-email")
    res.status(200).json(allfeedbacks)
})

export default router;
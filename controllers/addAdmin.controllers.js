import express from "express"
import AddAdmin from "../models/addAdmin.models.js";
const router = express.Router();

router.post("/add-admin", async(req, res)=>{
    const { email, password, secretPassword } = req.body;
    if(!email){
        throw new Error("email is required")
    };
    if(!password){
        throw new Error("password is required")
    };
    if(!secretPassword){
        throw new Error("secret password is required")
    };
    if(secretPassword !== process.env.SECRET_PASSWORD){
        res.redirect("/add-admin")
    };
    const newAdmin = await AddAdmin.create({
        email,
        password
    });
    res.status(200).json({ data: newAdmin });
})

export default router;
import mongoose from "mongoose"

export function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB connected successfully")
    })
}
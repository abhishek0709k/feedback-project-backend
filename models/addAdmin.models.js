import { Schema, model } from "mongoose"

const addAdminSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const AddAdmin = model("AddAdmin", addAdminSchema); 

export default AddAdmin;
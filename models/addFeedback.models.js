import { Schema, model } from "mongoose"

const addFeedbackSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    feedback: {
        type: String,
        required: true
    }
}, { timestamps: true })

const AddFeedback = model("AddFeedback", addFeedbackSchema);

export default AddFeedback;
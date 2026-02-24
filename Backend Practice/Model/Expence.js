import mongoose from "mongoose";

const ExpenceSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String, 
            required: true,
        },
    },
    {
        collection: "IB_Dev",
        timestamps: true
    }
);

const ExpenceModal = mongoose.model("User", ExpenceSchema);
export default ExpenceModal;
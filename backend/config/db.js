import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://chandruchaithra0_db_user:895bn3vXnJMfXQPa@cluster0.yqsasnj.mongodb.net/TechQuiz")
    .then(()=>{
        console.log("DB CONNECTED");
    })
};
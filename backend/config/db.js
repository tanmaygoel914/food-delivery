import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://goeltanmay914:tanmay123@cluster0.ef1uwnq.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
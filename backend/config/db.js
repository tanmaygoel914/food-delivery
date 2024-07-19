import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://goeltanmay914:tanmay123@cluster0.ef1uwnq.mongodb.net/food-del?retryWrites=true&w=majority').then(()=>console.log("DB Connected"));
}

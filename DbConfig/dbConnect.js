import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb://root:example@localhost:27017/Quiz-APIs?authSource=admin',{

        });
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB 
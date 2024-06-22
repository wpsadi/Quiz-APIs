import app from "./app.js"
import connectDB from "./DbConfig/dbConnect.js";


const PORT = 3000;

app.listen(PORT,async()=>{
    await connectDB()
    console.log(`Server is running at PORT:${PORT}`)
})
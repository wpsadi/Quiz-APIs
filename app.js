import express, { response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import morgan from "morgan"
import { errMiddle } from "./middlewares/err.middleware.js";
import SelfApplication from "./routes/Console.js";

const app = express();

// Logging
app.use(morgan("dev"))

// Default middlewares
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Routes
app.use("/console",SelfApplication)

// Universal Route
app.use("*",(req,res,next)=>{
    const code =  200;
    const resp = `Welcome to the server of Quiz-APIs`

    res.status(code).json({
        status:true,
        method:req.method,
        code,
        resp
    })
})

// Error Handling
app.use(errMiddle)


export default app
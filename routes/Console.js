import { Router } from "express";
import accountsRouter from "./Console/Accounts-Admin-routes.js";
import AppHandler from "../utils/appRequestHandler.js";


const SelfApplication = new Router()


SelfApplication.use("/account",accountsRouter)


SelfApplication.use('*',(req,res,next)=>{
    throw new AppHandler("Invalid Page",404)
})


export default SelfApplication

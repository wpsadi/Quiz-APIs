import { Router } from "express";
import { CreateAccount } from "./Accounts-Admin-routes/createAccount.js";
import AppHandler from "../../utils/appRequestHandler.js";


const accountsRouter = new Router()


accountsRouter.post("/create",CreateAccount)

accountsRouter.use('*',(req,res,next)=>{
    throw new AppHandler("Invalid Page in Console-Accounts",404)
})

export default accountsRouter

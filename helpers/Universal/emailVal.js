import {z} from "zod"

export const emailVal = (email)=>z.string().email(email)
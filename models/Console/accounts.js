import { Schema,model } from "mongoose";
import { emailVal } from "../../helpers/Universal/emailVal.js";

const MinimumUsernameLength = 5
const MaximumUsernameLength = 8

const MinimumPasswordLength = 8
const MaximumPasswordLength = 64

const accountsSchema = new Schema({
    username:{
        type:String,
        required:[true,"Please provide Username for the Console-Accounts Model"],
        unique:[true,"Username already exist for the Console-Accounts Model"],
        trim:true,
        minLength:[MinimumUsernameLength,`Minimum Username length of ${MinimumUsernameLength} not fulfilled for the Console-Accounts Model`],
        maxLength:[MaximumUsernameLength,`Username length exceeds the limit of ${MaximumUsernameLength} for the Console-Accounts Model`]
    },
    password:{
        type:String,
        required:[true,"Please provide Password for the Console-Accounts Model"],
        trim:true,
        select:false,
        minLength:[MinimumPasswordLength,`Minimum Password length of ${MinimumPasswordLength} not fulfilled for the Console-Accounts Model`],
        maxLength:[MaximumPasswordLength,`Password length exceeds the limit of ${MaximumPasswordLength} for the Console-Accounts Model`]
    },
    role:{
        type:String,
        default :"user",
        enum:["admin","user"],
        required:[true,"Please provide Role for the Console-Accounts Model"],
        trim:true,

    },
    email:{
        type:String,
        required:[true,"Please provide Email for the Console-Accounts Model"],
        unique:[true,"Email already exist for the Console-Accounts Model"],
        trim:true,
        validate:{
            validator:(email)=>emailVal,
            message:(props)=>`${props.value} is not a valid email for the Console-Accounts Model`
        }
    },
    emailVerification:{
        type:Boolean,
        default:false
    }

    
})

const accounts = model('accounts',accountsSchema)

export default  accounts
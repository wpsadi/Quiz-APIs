import accounts from "../../../models/Console/accounts.js"
import AppHandler from "../../../utils/appRequestHandler.js"

export const DeleteAccountInConsole = async ({email=false,username=false})=>{
    if (!email && !username){
        throw new AppHandler("Please provide email and username to check the account in Delete-Console-Account",400)
    } 
    if (email && username){
        throw new AppHandler("Please provide either email or username at once to check the account in Delete-Console-Account",400)
    }
    let found = false
    let account;
    if (email){
        account = await accounts.findOneAndDelete({
            email
        })
        if (account){
            found = true
        }

    }
    else if (username){
        account = await accounts.findOneAndDelete({
            username
        })
        if (account){
            found = true
        }
    }

    return {
        found,account
    }

    
}
import { CheckAccountInConsole } from "../../../helpers/Console/Account/CheckAccountExist.js";
import { DeleteAccountInConsole } from "../../../helpers/Console/Account/DeleteConsole.Account.js";
import accounts from "../../../models/Console/accounts.js";
import AppHandler from "../../../utils/appRequestHandler.js";

export const CreateAccount = async (req, res, next) => {
  let code = 404;
  try {
    const { username, password, email, repeat_password } = req.body;
    if (!username || !password || !email || !repeat_password) {
      code = 400;
      throw new Error("Please fill all fields");
    }
    if (password !== repeat_password) {
      code = 400;
      throw new Error("Password does not match");
    }
    // Check if the email or username already exist
    let EmailCheck = await CheckAccountInConsole({ email });

    let accountDetails = EmailCheck.account;

    if (EmailCheck.found) {
      code = 400;
      if (accountDetails.emailVerification){
        throw new Error("Email already exist");
    }
    else{
        await DeleteAccountInConsole({
            email
        })
    }
    }


    let UsernameCheck = await CheckAccountInConsole({ username });

    accountDetails = UsernameCheck.account;
    if (UsernameCheck.found) {
      code = 400;
        if (accountDetails.emailVerification){
            throw new Error("Username already exist");
        }
        else{
            await DeleteAccountInConsole({
                username
            })
        }
     
    }

    // Create the account
    const account = new accounts({
      username,
      password,
      email,
    });

    await account.save();

    code = 200;
    res.status(code).json({
      status: true,
      method: req.method,
      code: code,
      resp: "Account Created",
    });
  } catch (error) {
    next(new AppHandler(error.message, code));
  }
};

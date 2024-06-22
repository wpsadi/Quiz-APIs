class AppHandler extends Error{
    constructor(message,statusCode,status=false){
        super(message)
        this.statusCode = statusCode
        this.status = status

        Error.captureStackTrace(this,this.constructor);
    }
}
export default AppHandler
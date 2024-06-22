export const errMiddle = async (err,req,res,next)=>{
    const message = err.message || "Something Unexpected happend"
    const code = err.statusCode || 500
    const status = err.status || false
    res.status(code).json({
        status,
        method:req.method,
        code,
        resp:message
    })
}   
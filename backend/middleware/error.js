const ErrorHander = require("../utils/errorhander");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server Error";


// wrong mongodb ID error

if(err.name === "CastError"){
    const message = `Resource not found invalid : ${err.path}`;
    err = new ErrorHander(message,400)
}

    res.status(err.statusCode).json({
        success : false,
        message : err.message,
    })
}
const app = require('./app')
const dotenv = require("dotenv")
const connectDatabse = require("./config/database")

// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server due to uncaught exception`);
    process.exit(1)
})

// config
dotenv.config({path:"backend/config/config.env"})

// connecting to databse
connectDatabse()

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is on http://localhost: ${process.env.PORT}`);
})
    
// unhandled promise rejection

process.on("unhandledRejection",err=>{
    console.log(`error: ${err.message}`);
    console.log(`shutting down the server due to unhandle promise rejection`);

    server.close(()=>{
        process.exit(1);
    });
})
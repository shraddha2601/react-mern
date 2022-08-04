const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error")
app.use(express.json())

// route import

const product = require("./routes/productRoute")

app.use("/api/v1",product)


// middleware for error
app.use(errorMiddleWare)
module.exports = app












// // require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();

// const port =3000;

// const mongoose = require("mongoose");
// // require("./db/conn");
// // const users = require("./models/userSchema")
// const product = require("./routes/productRoute")



// app.use(
//     express.urlencoded({ extended: true })
// );

// app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

// mongoose.connect('mongodb+srv://shraddha:hBc2rhLmScxBFbvC@cluster0.znbty.mongodb.net/test',
//     (err) => {
//         if(err){
//             console.log("Db is not connect");
//         }else{
//             console.log("Db is connect")
//         }
//     }
// )


// // const port = 8003;
// // app.use(cors());
// // app.use(express.json())


// app.use("/api/v1",product);
// app.listen(port,()=>{
//     console.log(`server is started at port number ${port}`);
// })
// //fCPQwIqnr3vJPwMg
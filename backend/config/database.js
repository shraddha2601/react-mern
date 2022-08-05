const mongoose = require("mongoose")

const connectDatabse = ( )=>{
    mongoose.connect(process.env.DB_URI,{useUnifiedTopology:true,
        }).then((data)=>{
            console.log(`db is connected`);
        });
}


module.exports = connectDatabse

// hBc2rhLmScxBFbvC
// mongodb+srv://shraddha:<password>@cluster0.znbty.mongodb.net/test
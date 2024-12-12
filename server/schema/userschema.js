const mongoose = require("mongoose");
const schema = mongoose.Schema;


const userSchema = new schema ({
    username : {
        type : String,
    },
    email : {
       type : String
    },
    phone : {
        type : String
    },
    password : {
        type : String
    },
})


module.exports = userSchema;
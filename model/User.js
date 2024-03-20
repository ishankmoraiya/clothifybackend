const mongoose=require("mongoose")

const userschema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    }
})

module.exports=mongoose.model("User",userschema);
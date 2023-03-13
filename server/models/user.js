import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        firstname:{
            type:String,
            require:true
        },
        lastname:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
        },
        phone:{
            type:Number,
            require:true
        },
        date:{
            type:Date,
            default:Date.now
    
        }
    }

)
const User = mongoose.model('User', UserSchema);

export default User
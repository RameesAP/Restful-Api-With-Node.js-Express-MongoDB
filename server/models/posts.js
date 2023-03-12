import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:Date,

    }
})

const PostModel=mongoose.model('posts',PostSchema);
export default PostModel
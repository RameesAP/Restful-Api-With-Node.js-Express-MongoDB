import PostModel from "../models/posts.js";


//submit post
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get all post
export const getAllPosts = async (req, res) => {

    try {
        const post = await PostModel.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

//specific post
export const getSpecifc = async (req, res) => {
    const postId = req.params.id

    try {
        const post = await PostModel.findById(postId)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

//delete post  
export const deletePost = async (req, res) => {
    const id=req.params.id
    try {
        // const removePost = PostModel.deleteOne(id)
        // res.status(200).json(removePost,"deleted")
        const post=await PostModel.findById(id)
        await post.deleteOne();
        res.status(200).json("post Deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}
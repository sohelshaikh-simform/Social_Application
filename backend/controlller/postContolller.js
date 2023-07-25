const postModel=require("../models/post")
// const postModel=require("../models/post")

const createPost=async(req,res)=>{

    // const newFood=postModel({
    //     name:req.body.name,
    //     calories:req.body.calories
    // })
    // let id=105
    const newPost= await postModel(req.body)
    try{
        await newPost.save()
        res.send(newPost)
    }
    catch(error){
        res.status(500).send(error)
    }
}

const getPosts=async(req,res)=>{
    const allPost=await postModel.find()
    try{
        res.send(allPost)
    }
    catch(err){
        res.status(500).send(err)
    }
}

const getPost=async(req,res,next)=>{
    const post=await postModel.findById(req.params.id)
    try{
        res.post = post
        next()
    }
    catch(err){ 
        res.status(500).send(err)
    }
}

const updatePost=async(req,res)=>{
    try{
        await postModel.findByIdAndUpdate(req.params.id,req.body);
    }
    catch(err){
        res.status(500).send(err)
    }
}

const deletePost=async(req,res)=>{
    try{
        const post=await postModel.findByIdAndDelete(req.params.id);
        if(!post) res.status(404).send("no item found")
        res.status(200).send();
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports={createPost,getPosts,updatePost,deletePost,getPost}
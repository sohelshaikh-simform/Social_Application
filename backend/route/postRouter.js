const express=require("express")
const router=express.Router();
const foodContro=require("../controlller/postContolller")
const commentCnt=require("../controlller/commentCnt")

router.post('/add-post',foodContro.createPost)
router.post('/add-comment/:id',commentCnt.createCommetnt)

router.get('/posts',foodContro.getPosts)

router.get('/posts/:id',foodContro.getPost,commentCnt.commentbypostid)
// router.get('/posts/:id',commentCnt.commentbypostid)

router.put('/edit-post/:id',foodContro.updatePost)

router.delete('/posts/:id',foodContro.deletePost);    

module.exports=router;
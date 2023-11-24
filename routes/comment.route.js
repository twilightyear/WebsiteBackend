const express = require('express');
const router = express.Router();

const CommentController = require('../controllers/comment.controller');
const commentController = new CommentController();

//댓글 조회
router.get('/getComment/:id', (req,res) => {
    let communityId = req.params.id;
    commentController.getComment(req,res,communityId);
});

//댓글 작성
router.post('/createComment/:id',(req,res)=>{
    let communityId = req.params.id;
    commentController.createComment(req,res,communityId);
})

//댓글 수정
router.patch('/updateComment/:id', (req,res) => {
    let commentId = req.params.id;
    commentController.updateComment(req,res,commentId);
});

//댓글 삭제
router.delete('/deleteComment/:id', (req,res) => {
    let commentId = req.params.id;
    commentController.deleteComment(req,res,commentId);
});


module.exports = router;

 
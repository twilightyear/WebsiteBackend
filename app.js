//게시글 작성,전체조회,조회,수정,삭제
//댓글 작성,조회,수정,삭제

//Express 사용하기
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//열릴 포트 
const port = 3000;

//게시판 라우터 가져오기
const CommunityRouter= require('./routes/communtiy.route');

//댓글 라우터 가져오기
const CommentRouter= require('./routes/comment.route');

//기본화면
app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>");
});

//서버 오픈!
app.listen(port,()=>{
    console.log(port,"포트로 서버가 열렸어요!");
});

//게시판 라우터 사용
app.use(CommunityRouter);

//댓글 라우터 사용
app.use(CommentRouter);

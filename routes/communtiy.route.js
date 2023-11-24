const express = require('express');
const router = express.Router();

const CommunityController = require('../controllers/community.controller');
const communityController = new CommunityController();

//게시글 전체조회
router.get('/getCommunity', (req,res) => {
    communityController.getCommunity(req,res);
});

//게시글 조회
router.get('/getOneCommunity/:id', (req,res) => {
    let communityId = req.params.id;
    communityController.getOneCommunity(req,res,communityId);
});

//게시글 작성
router.post('/createCommunity', (req,res) => {
    communityController.createCommunity(req,res);
});

//게시글 삭제
router.delete('/deleteCommunity/:id', (req,res) => {
    let communityId = req.params.id;
    communityController.deleteCommunity(req,res,communityId);
});

//게시글 수정
router.patch('/updateCommunity/:id', (req,res) => {
    let communityId = req.params.id;
    communityController.updateCommunity(req,res,communityId);
});

module.exports = router;


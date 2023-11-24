const express = require('express');
const Community = require('../models').Community;
const app = express();

//데이터베이스 연결시도
Community.sequelize.sync().then( () => {
  console.log("Community DB 연결 성공");
}).catch(err => {
  console.log("Community DB 연결 실패");
  console.log(err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

class CommunityRepository {

  //게시글 전체조회용 레포지토리
  findAllCommunity = async () => {
    const communities = await Community.findAll();
    return communities;
  }

  //특정게시글 조회용 레포지토리
  findOneCommunity = async (communityId) => {
    const oneCommunity = await Community.findOne({where: {id:communityId}});
    return oneCommunity;
  }
  
  //게시글 생성용 레포지토리
  createCommunity = async (title,content) => {
    const newCommunity = await Community.create({
      title,
      content
    });
    return newCommunity;
  }

    //특정게시글 삭제용 레포지토리
    deleteCommunity = async (communityId) => {
      const targetCommunity = await Community.destroy({where: {id:communityId}});
      return targetCommunity;
    }

    //특정게시글 수정용 레포지토리
    updateCommunity = async (title,content,communityId) => {
      const targetCommunity = await Community.update({
        title : title,
        content : content
      },{where: {id:communityId}});
      return targetCommunity;
    }
}

module.exports = CommunityRepository;
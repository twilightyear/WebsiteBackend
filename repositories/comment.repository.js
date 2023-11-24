const express = require('express');
const Comment = require('../models').Comment;
const app = express();

//데이터베이스 연결시도
Comment.sequelize.sync().then( () => {

  console.log("Comment DB 연결 성공");

}).catch(err => {

  console.log("Comment DB 연결 실패");
  console.log(err);

});

class CommentRepository {

    //특정댓글 검색용 레포지토리 (CommentId)
    findCommentByCommentId = async (commentId) => {

        const comments = await Comment.findOne({where:{id:commentId}});
        return comments;

      }

    //특정댓글 검색용 레포지토리 (CommunityId)
    findCommentByCommunityId = async (communityId) => {

        const comments = await Comment.findAll({where:{CommunityId:communityId}});
        return comments;

      }

    //댓글 생성용 레포지토리
    createComment = async (text,communityId) => {

      const newComment = await Comment.create({

        text : text,
        CommunityId : communityId

      });

      return newComment;
    }

    //댓글 수정용 레포지토리
    updateComment = async (text,commentId) => {

      const targetComment = await Comment.update({

        text : text
      },{where: {id:commentId}
    
    });

      return targetComment;

    }

    //댓글 삭제용 레포지토리
    deleteComment = async (commentId) => {

      const targetComment = await Comment.destroy({where: {id:commentId}});
      return targetComment;
      
    }

}

module.exports = CommentRepository;
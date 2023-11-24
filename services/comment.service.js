require('dotenv').config();
const CommentRepository = require('../repositories/comment.repository.js');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

class CommentService {

    constructor(){

        this.commentRepository = new CommentRepository();

    }

    //댓글 찿기 서비스
    findComment = async (communityId) => {

        const allComment = await this.commentRepository.findCommentByCommunityId(communityId);

        allComment.sort((a, b) => {

        return b.createdAt - a.createdAt;
        
        });

        return allComment.map(comment => {

        return {

          id: comment.id,
          text: comment.text,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt,
          communityId : comment.CommunityId

          }

        });

      };
    
    //댓글 생성 서비스
    createComment = async (text,communityId) => {

      const newComment = await this.commentRepository.createComment(text,communityId);

    }

    //댓글 수정 서비스
    updateComment = async (text,commentId) => {

      const targetComment = await this.commentRepository.updateComment(text,commentId);

    };

    //댓글 제거 서비스
    deleteComment = async (commentId) => {

      const targetComment = await this.commentRepository.deleteComment(commentId);

    };

  }

module.exports = CommentService;
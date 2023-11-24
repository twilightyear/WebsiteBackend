const CommentService = require('../services/comment.service');

class CommentController {

    constructor() {

        this.commentService = new CommentService();

        //댓글 조회 컨트롤러
        this.getComment = async (req,res,communityId) => {

          try {

          const comment = await this.commentService.findComment(communityId);
          res.status(201).json({comment});

          } catch (err) {

            res.status(500).json({ error : "댓글을 가져오는데 오류가 발생했습니다."});

          } 

        }

        //댓글 생성 컨트롤러
        this.createComment = async (req,res,communityId) => {
          try {
            const { text } = req.body;
            const comment = await this.commentService.createComment(text,communityId);
            res.status(201).json("성공적으로 댓글을 작성했습니다.");
          } catch (err) {
            res.status(500).json({ error : "댓글을 게시하는데 오류가 발생했습니다."});
          }
        } 

        //댓글 수정 컨트롤러
        this.updateComment = async (req,res,commentId) => {
          const { text } = req.body;
          try{
            const targetcomment = await this.commentService.updateComment(text,commentId);
            res.status(201).json("성공적으로 댓글을 수정했습니다.");
          } catch(err){
            res.status(500).json({
              error : "댓글을 수정하는 과정중에서 오류가 발생했습니다."
            });
          }
        };

        //댓글 삭제 컨트롤러
        this.deleteComment = async (req,res,commentId) => {

          try{

            const targetComment = await this.commentService.deleteComment(commentId);
            res.status(201).json("성공적으로 댓글을 제거했습니다.");

          } catch(err){

            res.status(500).json({

              error : "댓글을 삭제하는 과정중에서 오류가 발생했습니다."

            });

          }

        };

      };
    }


module.exports = CommentController;
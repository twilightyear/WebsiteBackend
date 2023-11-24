const CommunityService = require('../services/community.service');

class CommunityController {
    constructor() {
        this.communityService = new CommunityService();
        
        //게시글 전체조회 컨트롤러
        this.getCommunity = async (req,res) => {
          try{
          const community = await this.communityService.findAllCommunity();
          res.status(201).json({
            community
          });
          } catch(err){
            res.status(500).json({
              error : "게시글이 존재하지 않습니다."
            });
          }
        };

        //특정 게시글 조회 컨트롤러
        this.getOneCommunity = async (req,res,communityId) => {
          try{
            const community = await this.communityService.findOneCommunity(communityId);
            res.status(201).json({
              community
            });
          } catch(err){
            res.status(500).json({
              error : "게시글을 받아오는 과정중에서 오류가 발생했습니다."
            });
          }
        };

        //게시글 작성 컨트롤러
        this.createCommunity = async (req, res) => {
          const { title, content } = req.body;
          try {
            const newCommunity = await this.communityService.createCommunity(title, content);
            res.status(201).json("성공적으로 게시글을 생성했습니다.");
          } catch (error) {
            res.status(500).json({ 
              error: "게시글을 작성하는 과정중에서 오류가 발생했습니다."
            });
          }
        }

        //게시글 삭제 컨트롤러
        this.deleteCommunity = async (req,res,communityId) => {
          try{
            const targetcommunity = await this.communityService.deleteCommunity(communityId);
            res.status(201).json("성공적으로 게시글을 제거했습니다.");
          } catch(err){
            res.status(500).json({
              error : "게시글을 삭제하는 과정중에서 오류가 발생했습니다."
            });
          }
        };

        //게시글 수정 컨트롤러
        this.updateCommunity = async (req,res,communityId) => {
          const { title, content } = req.body;
          try{
            const targetcommunity = await this.communityService.updateCommunity(title,content,communityId);
            res.status(201).json("성공적으로 게시글을 수정했습니다.");
          } catch(err){
            res.status(500).json({
              error : "게시글을 수정하는 과정중에서 오류가 발생했습니다."
            });
          }
        };
      }
    }

module.exports = CommunityController;

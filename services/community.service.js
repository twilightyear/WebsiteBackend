require('dotenv').config();
const CommunityRepository = require('../repositories/community.repository.js');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

class CommunityService {
    constructor(){
        this.communityRepository = new CommunityRepository();
    }

    //게시글 전체조회용 서비스
    findAllCommunity = async () => {
      const allCommunity = await this.communityRepository.findAllCommunity();

      allCommunity.sort((a, b) => {
      return b.createdAt - a.createdAt;
      })
      return allCommunity.map(community => {
      return {
        id: community.id,
        title: community.title,
        createdAt: community.createdAt
        }
      });
    };

    //특정 게시글 조회용 서비스
    findOneCommunity = async (communityId) => {
      const oneCommunity = await this.communityRepository.findOneCommunity(communityId);
      return {
        id : oneCommunity.dataValues.id,
        title : oneCommunity.dataValues.title,
        content : oneCommunity.dataValues.content,
        createdAt : oneCommunity.dataValues.createdAt,
        updatedAt :oneCommunity.dataValues.updatedAt
      };
    };

    //게시글 생성 서비스
    createCommunity = async (title,content) => {
      const newCommunity = await this.communityRepository.createCommunity(title,content);
    };

    //게시글 제거 서비스
    deleteCommunity = async (communityId) => {
      const targetCommunity = await this.communityRepository.deleteCommunity(communityId);
    };

    //게시글 수정 서비스
    updateCommunity = async (title,content,communityId) => {
      const targetCommunity = await this.communityRepository.updateCommunity(title,content,communityId);
    };
  }

module.exports = CommunityService;
const express = require('express');
const router = express.Router();

const CommunityRouter = require("./community.routes");

router.use("/getCommunity",CommunityRouter);

module.exports = router;
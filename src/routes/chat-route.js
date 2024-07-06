const express = require("express");
const chatController = require("../controllers/chat-controller");
const { authenticate } = require("../middlewares/authenticate");

const chatRoute = express.Router();

chatRoute.post("/chatroom", authenticate, chatController.createChatroom);

module.exports = chatRoute;

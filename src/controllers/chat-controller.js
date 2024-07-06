const chatService = require("../services/chat-service");

const chatController = {};

chatController.createChatroom = async (req, res, next) => {
  try {
    //หาก่อนว่ามี chatRoomId ยัง
    let chatRoom = await chatService.findExistingChatroom(req.user.customerId);

    if (!chatRoom) {
      chatRoom = await chatService.createChatroom(req.user.customerId);
    }

    res.status(201).json({ chatRoomId: chatRoom.id });
  } catch (error) {
    next(error);
  }
};

module.exports = chatController;

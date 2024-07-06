const prisma = require("../model/prisma");
const prismaSecondDb = require("../model/prismaSecondDb");

const chatService = {};

chatService.createChatroom = (customerId) =>
  prismaSecondDb.chatRooms.create({
    data: {
      customerId: +customerId,
      adminId: 8,
    },
  });

chatService.findExistingChatroom = (customerId) =>
  prismaSecondDb.chatRooms.findFirst({
    where: {
      customerId: +customerId,
    },
  });

chatService.getMessages = (chatRoomId) => {
  return prismaSecondDb.messages.findMany({
    where: {
      chatRoomId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

chatService.sendMessage = (chatRoomId, senderId, senderType, message) => {
  return prismaSecondDb.messages.create({
    data: {
      chatRoomId,
      senderId,
      senderType,
      message,
    },
  });
};

chatService.getChatRooms = () => {
  return prismaSecondDb.chatRooms.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
};

chatService.getChatRoomsWithCustomerNames = async () => {
  const chatRooms = await chatService.getChatRooms();

  // เพิ่มข้อมูลชื่อของลูกค้า
  return Promise.all(
    chatRooms.map(async (room) => {
      const customer = await prisma.customers.findUnique({
        where: {
          customerId: room.customerId,
        },
      });
      return {
        id: room.id,
        name: `${customer.firstName} ${customer.lastName}`,
        customerId: room.customerId,
        adminId: room.adminId,
        createdAt: room.createdAt,
        updatedAt: room.updatedAt,
      };
    })
  );
};

chatService.getCustomerById = (customerId) => {
  return prisma.customers.findUnique({
    where: {
      customerId,
    },
  });
};

module.exports = chatService;

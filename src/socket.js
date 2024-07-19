const { Server } = require("socket.io");
const chatService = require("./services/chat-service");

function socketIO(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  const onlineCustomers = new Set(); // เก็บสถานะออนไลน์ของลูกค้า
  const socketToCustomerMap = {}; // เก็บ mapping ของ socket.id กับ customerId

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // เมื่อได้รับการขอ getChatRooms
    socket.on("getChatRooms", async () => {
      const chatRooms = await chatService.getChatRoomsWithCustomerNames();
      console.log("Chat rooms:", chatRooms); // เพิ่มการดีบักเพื่อเช็คว่าข้อมูลห้องแชทถูกต้อง
      socket.emit("chatRooms", chatRooms);
    });

    socket.on("initiateChat", async ({ chatRoomId, customerId }) => {
      console.log(
        "Customer connected:",
        customerId,
        "ChatRoom ID:",
        chatRoomId
      );
      socket.join(chatRoomId);

      onlineCustomers.add(customerId); // เพิ่มลูกค้าในสถานะออนไลน์
      socketToCustomerMap[socket.id] = customerId; // เก็บ mapping ของ socket.id กับ customerId
      io.emit("customerStatus", { customerId, status: "online" }); // ส่งสถานะออนไลน์ไปยัง Admin

      const messages = await chatService.getMessages(chatRoomId);
      socket.emit("roomMessages", messages);

      const customer = await chatService.getCustomerById(customerId);
      const chatRoom = {
        id: chatRoomId,
        name: `${customer.firstName} ${customer.lastName}`,
        customerId: customerId,
      };

      io.emit("initiateChat", chatRoom);
    });

    socket.on("joinRoom", async ({ chatRoomId }) => {
      socket.join(chatRoomId);
      const messages = await chatService.getMessages(chatRoomId);
      socket.emit("roomMessages", messages);
    });

    socket.on("message", async (data) => {
      const { chatRoomId, senderId, senderType, message } = data;
      const newMessage = await chatService.sendMessage(
        chatRoomId,
        senderId,
        senderType,
        message
      );
      io.to(chatRoomId).emit("message", newMessage);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
      const customerId = socketToCustomerMap[socket.id]; // ดึง customerId จาก mapping
      delete socketToCustomerMap[socket.id]; // ลบ mapping เมื่อ socket ถูกตัดการเชื่อมต่อ

      if (customerId) {
        const isStillOnline =
          Object.values(socketToCustomerMap).includes(customerId);
        if (!isStillOnline) {
          onlineCustomers.delete(customerId);
          io.emit("customerStatus", { customerId, status: "offline" });
        }
      }
    });
  });

  return io;
}

module.exports = socketIO;

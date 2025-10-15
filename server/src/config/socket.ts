import { Server } from "socket.io";
import type { Server as HttpServer } from "http";
// import registerChatHandlers from "../sockets/chat.socket";

export const initSocket = (server: HttpServer): void => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`🟢 Connected: ${socket.id}`);

    // registerChatHandlers(io, socket);

    socket.on("disconnect", () => {
      console.log(`🔴 Disconnected: ${socket.id}`);
    });
  });
};

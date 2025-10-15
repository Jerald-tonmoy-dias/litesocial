import http from "http";
import app from "./app";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { initSocket } from "./config/socket";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

const server = http.createServer(app);

// Initialize Socket.IO
initSocket(server);

server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

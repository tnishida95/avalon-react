const express = require('express');
const app = express();
const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer();
const io = new socketIo.Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const port = process.env.PORT || 4001;
const sockets = [];

app.get('/', (req, res) => {
    res.send('<h1>Server</h1>');
});

io.on("connect", (socket) => {
    console.log(`socket [${socket.id}] joined, we now have [${io.sockets.sockets.size}] connections`);
});

io.on("disconnect", (socket) => {
    console.log(`socket [${socket.id}] disconnected, we now have [${io.sockets.sockets.size}] connections`);
});

server.listen(port, () => {
    console.log(`listening on port=${port}`);
});
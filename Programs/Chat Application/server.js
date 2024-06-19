const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  console.log('Novo usuário conectado');

  socket.on('message', message => {
    console.log('Mensagem recebida:', message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor de chat iniciado na porta ${PORT}`);
});

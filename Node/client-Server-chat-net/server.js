const net = require('net');

const PORT = 5000;

const server = net.createServer((socket) => {
  console.log('🟢 Client connected.');

  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log(`Client: ${data}`);
    if (message.toLowerCase() === 'exit') {
      console.log('❌ Client exited. Closing connection...');
      socket.write('exit');
      socket.end();
      server.close();
    } else {
      process.stdout.write('You: ');
    }
  });
  socket.on('error', ()=>{
    socket.end();
    server.close();
  })
  socket.on('end', () => {
    console.log('🔴 Client disconnected.');
  });

  // Server sends messages
  const stdin = process.stdin;
  stdin.addListener('data', function(input) {
    const msg = input.toString().trim();
    socket.write(msg);
    if (msg.toLowerCase() === 'exit') {
      console.log('❌ You exited. Closing connection...');
      socket.end();
      server.close();
      process.exit();
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  console.log('⏳ Waiting for a client to connect...');
});

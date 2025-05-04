const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
    console.log('Client connected');

    clients.push(socket);

    socket.on('data', (data) => {
        console.log(`Client says: ${data.toString().trim()}`);
        
        // Broadcast the message to all clients
        clients.forEach(client => {
            if (client !== socket) {
                client.write(`Client: ${data}`);
            }
        });
    });

    socket.on('end', () => {
        console.log('Client disconnected');
        clients.splice(clients.indexOf(socket), 1);
    });

    socket.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
});

server.listen(3000, () => {
    console.log('Chat server running on port 3000...');
});


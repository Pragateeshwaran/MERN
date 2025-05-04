const net = require('net');

net.createServer((socket) => {
    console.log("Client connected 🟢");

    let data = '';  // Use let, not const, since it will be modified

    socket.on('data', (chunk) => {
        data += chunk;

        data = data.toString().trim();

        if (data === 'end') {
            console.log("Client ended the connection 🚫");
            socket.end(); // Properly end the connection
            process.exit();
        } else {
            console.log("Client:", data);
            process.stdout.write("You: ");
        }
    });

    process.stdin.on('data', (input) => {
        socket.write(input);
    });

}).listen(3000, () => {
    console.log('🚀 Server is listening on http://localhost:3000');
});



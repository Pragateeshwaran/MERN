const net = require('net');

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
    console.log("Connected with server 🟢");
    process.stdout.write("You: ");
});

client.on('data', (chunk) => {
    let data = chunk.toString().trim();

    if (data === 'end') {
        console.log("The socket closed 🚫");
        client.end(); // Or client.destroy();
        process.exit();
    } else {
        console.log("Server:", data);
        process.stdout.write("You: ");
    }
});

process.stdin.on('data', (input) => {
    client.write(input);
});

const net = require('net');
const readline = require('readline');

const client = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to chat server');
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('data', (data) => {
    console.log(`\n${data.toString()}`);
});

rl.on('line', (input) => {
    if (input.trim().toLowerCase() === 'quit' || input.trim().toLowerCase() === 'exit') {
        client.end();
        rl.close();
    } else {
        client.write(input);
    }
});

client.on('end', () => {
    console.log('Disconnected from server');
    rl.close();
});
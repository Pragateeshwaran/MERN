const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log('✅ Connected to server.');
  process.stdout.write('You: ');
});

client.on('data', (data) => {
  const message = data.toString().trim();
  if (message.toLowerCase() === 'exit') {
    console.log('\n❌ Server exited. Disconnecting...');
    client.destroy();
    process.exit();
  } else {
    console.log(`\nServer: ${message}`);
    process.stdout.write('You: ');
  }
});

client.on('close', () => {
  console.log('🔴 Connection closed.');
});

// Client sends messages
const stdin = process.openStdin();
stdin.addListener('data', function(input) {
  const msg = input.toString().trim();
  client.write(msg);
  if (msg.toLowerCase() === 'exit') {
    console.log('❌ You exited. Disconnecting...');
    client.destroy();
    process.exit();
  }
});

const http = require('http');

const sys = process.stdin;
process.stdout.write("You: ");

sys.on('data', (input) => {
    const message = input.toString().trim();

    if (message.toLowerCase() === 'exit') {
        console.log('❌ Exiting the chat.');
        process.exit();
    }

    const req = http.request({
        hostname: 'localhost',
        port: 4000,
        path: '/',
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' }
    }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            console.log("Server:", data.trim());
            process.stdout.write("You: ");
        });
    });

    req.on('error', (err) => {
        console.error('💥 Error:', err.message);
    });

    req.write(message);
    req.end();
});

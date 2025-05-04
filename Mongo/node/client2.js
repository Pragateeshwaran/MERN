const http = require('http');

const message = "Hello world! Node.js is great.";

const options = {
    hostname: 'localhost',
    port: 4000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(message)
    }
};

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Response:', JSON.parse(data));
    });
});

req.write(message);
req.end();
const http = require('http');

const server = http.createServer((req, res) => {
    if (1) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });

        req.on('end', () => {
            console.log(`Received message from client: ${body}`);
            const wordCount = body.trim().split(/\s+/).filter(word => word.length > 0).length;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('The word count of the message is ' + wordCount);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from the server!\n'); 
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
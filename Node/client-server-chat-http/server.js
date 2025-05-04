const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(`📨 Received from client: ${body}`);

            // Example logic: respond based on content
            const wordCount = body.trim().split(" ").filter(Boolean).length;

            let reply;
            if (body.toLowerCase().includes('hello')) {
                reply = "👋 Hello! How can I assist you?";
            } else if (wordCount === 0) {
                reply = "😐 You sent an empty message.";
            } else {
                reply = `📝 Your message has ${wordCount} word(s).`;
            }

            // Respond to the client
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(reply);
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('❌ Only POST requests are supported.');
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}/`);
});
    
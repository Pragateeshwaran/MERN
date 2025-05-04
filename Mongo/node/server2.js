const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const wordCount = body.trim().split(/\s+/).length;
            const charCount = body.replace(/\s/g, '').length;

            const response = {
                message: body,
                wordCount: wordCount,
                charCount: charCount
            };

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST requests are supported');
    }
});

server.listen(4000, () => {
    console.log('Server running on port 4000...');
});

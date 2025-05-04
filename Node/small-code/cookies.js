const http = require('http');

http.createServer((req, res) => {
    const cookie = req.headers.cookie;

    if (cookie) {
        console.log("Received cookie:", cookie);
    } else {
        console.log("No cookies received");
    }

}).listen(3000, () => {
    console.log("Listening on port 3000");
});

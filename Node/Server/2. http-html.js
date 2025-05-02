const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/") { 
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Single File Trigger</title>
        </head>
        <body>
          <h1>Trigger Server From Browser</h1>
          <button onclick="fetch('/trigger').then(r => r.text()).then(alert)">Click Me!</button>
 
        </body>
      </html>
    `;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);

  } else if (req.url === "/trigger") {
    console.log("🔥 Server was triggered from browser!");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server got your action!");
    
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(8080, () => {
  console.log("🚀 Server running at http://localhost:8080");
});

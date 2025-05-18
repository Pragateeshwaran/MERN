const http = require('http');
const url = require('url');

const gradePay = {
  A: 8000,
  B: 6500,
  C: 5000,
  D: 3500,
  E: 2000,
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if ( parsedUrl.pathname === '/pay') {
    const { employeeId, grade } = parsedUrl.query;

    if (!employeeId || !grade) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('Missing employeeId or grade');
    }

    const normalizedGrade = grade.toUpperCase();
    const pay = gradePay[normalizedGrade];

    if (!pay) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('Invalid grade');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>Employee Pay Details</h2>
      <p>Employee ID: ${employeeId}</p>
      <p>Grade: ${normalizedGrade}</p>
      <p>Pay: $${pay}</p>
    `);
  } else {
    // Serve HTML form
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <form action="/pay" method="get">
        <label>Employee ID: <input type="text" name="employeeId" required></label><br><br>
        <label>Grade (A–E): <input type="text" name="grade" required></label><br><br>
        <button type="submit">Get Pay</button>
      </form>
    `);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

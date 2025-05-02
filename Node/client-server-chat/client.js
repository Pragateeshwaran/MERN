const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
};

const req = http.request(options, (res) => {
  let data = '';

  console.log(`Status: ${res}`);
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response from server:', data);
  });
});

req.on('error', (err) => {
  console.error(`Request error: ${err.message}`);
});

req.end();

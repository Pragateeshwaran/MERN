const https = require('https');

https.get('https://www.google.com', (res) => {
    res.setEncoding('utf8');
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
}).on('error', (err) => {
    console.error('Error: ', err.message);
});

const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Response from backend on port 8082');
}).listen(8082, () => console.log('Running on 8082'));

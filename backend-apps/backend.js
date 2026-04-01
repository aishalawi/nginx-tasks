const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from backend on port 3000');
}).listen(3000, () => {
    console.log('Backend running on port 3000');
});

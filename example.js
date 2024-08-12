const http = require('http');

const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3002;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'),
    (err, data) => {
        if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server\n');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found\n');
    }
});
server.listen(port, hostname, () => {console.log(`Server running at https://${hostname}:${port}/`)
});
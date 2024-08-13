const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method.toUpperCase();
    if ( path === '/resource') {
        if (method === 'GET') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('GET request received');
        } else if (method === 'POST') {
            let body = '';
            req.on('data', chunk =>{
                body += chunk.toString();
            });
            req.on('end', () => {
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(`POST request receeived with data: ${body}`);
            });
        } else if (method === 'PUT') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(`PUT request received with data: ${body}`);
            });
        } else if (method === 'DELETE'){
            res.writeHead(200, { 'Content-Type': 'text/plain'});
            res.end('DELETE request received');
        } else  {
            res.writeHead(405, {'Content-Type': 'text/plain'});
            res.end(`${method} method not allowed`);
        }
    } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Not Found');
        }
    });

const port = 8081;

server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
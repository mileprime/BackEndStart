const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //create routes
    if (req.url === '/') {
        res.end('Welcome to the Home Page!\n');
    } else if (req.url === '/about'){
        res.end('Welcome to the About Page!\n');
    } else if (req.url === '/chinedu/name'){
        res.end('Welcome Chinedu!');
    } else if (req.url === '/ochonogor') {
        res.end('Welcome Ochonogor!');
    }
    else {
        res.statusCode = 404;               
        res.write('Loading\n');                 //  use write before end
        res.write('Page Missing\n');
        res.end('Page Not Found\n');
        
    }
});

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
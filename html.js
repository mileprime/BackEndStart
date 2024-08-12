const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.end('<h1>Welcome to the Home Page!</h1>\n');
       
    } else if (req.url === '/about'){
        res.end('<h1>Welcome to the About Page!</h1>\n');
    } else if (req.url === '/chinedu/name'){
        res.end('<h2>Welcome Chinedu!</h2>');
    } else if (req.url === '/ochonogor') {
        res.end('<p>Welcome Ochonogor!</p>');
    }
    else {
        res.statusCode = 404;
        res.write('<h1>Loading</h2>\n');
        res.write('<button>Page Missing</button>\n');
        res.end('<p>Page Not Found<p>\n');
        
    }
});

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
const hostname = '127.0.0.1';
const port = 3000;


const http = require('http');
const dt = require('./file');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end;
});
server.listen(port, hostname, () => {console.log(`Server running at https://${hostname}:${port}/`)
});
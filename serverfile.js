const http = require('http');
const test = require('./file');

const server= http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write( "add " + test.add(2, 3)+ "\n");
    res.write("multiply " + test.zombie(4,5,6)+ "\n");
    res.write("logic " + test.zombie(4,5,6, 7));
    res.end();
});

server.listen(8080, '127.0.0.1', () => {
    console.log('http://127.0.0:8080')
});
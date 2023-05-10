const http = require('http');
const data=require('./imran');

const hostname = '127.0.0.1';
const port = 3100;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<h1> welcome to node js </h1>");
  res.write(`${data.time()} <br> `);
  res.write(`${data.sum(5,6)} `);
  res.end('');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

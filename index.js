const http= require('http');
var fs =require('fs');
const { Console } = require('console');
http.createServer((req,res)=>{

    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    

}).listen(8080);

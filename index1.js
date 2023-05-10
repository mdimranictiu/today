const http =require('http');
const fs =require('fs');
const HomaPage= fs.readFileSync('index.html');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
if(req.url==='/about'){
    res.write(" <h1>this is about page </h1>");
    res.end();
}
else if(req.url==='/contact'){
    res.end("this is contact page");
}
else if(req.url==='/'){
    res.end(HomaPage)
    
}
else {
    res.writeHead(404)
    res.end('Page not found');
    }
}
);
server.listen(3000)
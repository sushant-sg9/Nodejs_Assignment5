var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url=="/welcome"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("Welcome to Dominos!")
  }else if(req.url=="/contact"){
    res.writeHead(200,{"Content-Type":"text/json"})
    res.end(JSON.stringify( {   phone: '18602100000',  
     email: 'guestcaredominos@jublfood.com' }
    ))
  }else {
    res.statusCode=404;
    res.setHeader("Content-Type","text/plain")
    res.end("404 Page Not Found!!!")
  }
}


module.exports = httpServer;
// Inspecting request details in an http server
const http=require("http");
const server=http.createServer(function(req,res){
// writeHead() sets the response status code and headers
    res.writeHead(200,{"Content-type":"text/plain"});
// end() sends the response body and closes the response
// req.method tells theHTTP method,such as GET and POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});
// sending response in JSON format
const http=require("http");
const server=http.createServer(function(req,res){
    if(req.url==="/api/status" && req.method==="GET"){
        const responseData={
            success:true,
            message:"API is working",
            server:"NodeJS HTTP Module"
        };
        // JSON responses using application/json
        res.writeHead(200,{"Content-type":"application/json"});
        // JSON.stringify() converts js object into a JSON string
        res.end(JSON.stringify(responseData));
        return;
    }
    res.writeHead(404,{"content-type":"application/json"});
    res.end(JSON.stringify({success:false,message:"Route not found."}));
});
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});
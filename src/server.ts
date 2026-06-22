import { createServer, IncomingMessage, Server } from "http";

const server : Server = createServer((req : IncomingMessage, res)=>{
  // console.log(req.url);
  // console.log(req.method); 

  const url = req.url;
  const method = req.method;

  if(url === "/" && method === "GET"){
    // res.writeHead(200, {"content-type" : "text/plain"});
    // res.end("This is root route.")

    res.writeHead(200, {"content-type" : "application/json"})
    res.end(JSON.stringify({ message : "This is root route."}));
  }
  else if(url?.startsWith("/poducts")){
    res.writeHead(200, {"content-type" : "application/json"})
    res.end(JSON.stringify({ message : "This is product route."}));
  }
  else{
    res.writeHead(404, {"content-type" : "application/json"})
    res.end(JSON.stringify({ message : "Page Not Found!"}));
  }
  
})

server.listen(5000, ()=>{
  console.log("Server is running on the port 5000");
})
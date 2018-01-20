const http = require('http');  // http is a module, you do not have to do npm install http because it is a core module
const fs = require('fs'); // require the build in file system module
fs.readFile('index.html', (err, html)=>{
  if(err){
    throw err;
  }
  const hostname = '127.0.0.1'; //The hostname you want in this case the local host
  const port = 3000;  //You set a port in your host
  const server = http.createServer((req, res)=>{ //create server
  res.statusCode=200; // all ok
  res.setHeader('Content-type', 'text/html'); // set the header of the response message
  res.write(html);
  res.end();
  });
  server.listen(port, hostname, ()=>{  //set where listening of the server
  console.log('Server Started on port ' + port);
  });

}); //Read a file method 

//Test git branch Hello

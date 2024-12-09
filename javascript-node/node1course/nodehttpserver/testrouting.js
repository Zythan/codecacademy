const http = require('http');

const handleGetRequest = (req, res) =>{
  const pathname = req.url
  console.log(pathname)

  if (pathname === '/users') {    
    return res.end(`well well well`);
  }
  res.statusCode = 404;
  return res.end('Requested resource does not exist');
}

// Creates server instance
const server = http.createServer((req, res) => {
  // Write server code here
  const { method } = req;
  console.log(method)
  switch(method) {
    case 'GET': console.log(`${method} was requested`)
                return handleGetRequest(req,res)                
    default   : console.log(`${method} not supported`)
                return res.end(`${method} not supported`);
  }
    

  res.end('Server is running3!');

});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});


const http = require('http');

const server = http.createServer((req, res) => {
  console.log("helllo");

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(80);
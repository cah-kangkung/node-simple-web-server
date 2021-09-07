const http = require('http')
const fs = require('fs')

const port = 3000;

const server = http.createServer((req, res) => {
   res.writeHead(200, {
      'Content-Type' : 'text/html'
   });
   
   const url = req.url;
   if (url === '/about') {
      fs.readFile('./about.html', (err, data) => {
         if (err) {
            res.writeHead(404)
            res.write('Error: file not found!')
         } else {
            res.write(data)
         }
         res.end();
      });
   } else if (url === '/contact') {
      res.write('<h1>Contact Page</h1>');
      res.end();
   } else {
      fs.readFile('./index.html', (err, data) => {
         if (err) {
            res.writeHead(404)
            res.write('Error: file not found!')
         } else {
            res.write(data)
         }
         res.end();
      });
   }
});

server.listen(port, () => {
   console.log(`Server is listening on port ${port}...`);
})
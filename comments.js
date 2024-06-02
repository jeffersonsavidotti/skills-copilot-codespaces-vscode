// Create web server
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Error: File not found');
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Path: comments.js
// Create web server
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Error: File not found');
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Path: comments.js
// Create web server
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Error: File not found');
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Path: comments.js
// Create web server
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200
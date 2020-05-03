const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.

http.createServer( (req, res) => {
  res.end('Welcome to NodeJS');
}).listen(5555);

// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

http.createServer( (req, res) => {
  let headerStringified = JSON.stringify(req.headers);
  
  res.end(headerStringified);
}).listen(6666);

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

http.createServer( (req, res) => {

  console.log(req.headers);
  console.log(req.url);
  
  res.end("Hello");
}).listen(3200);

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

http.createServer( (req, res) => {
  res.setHeader("content-type", "text/html");
  res.end("<h1>Hello</h1>");
}).listen(6000);

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response


http.createServer( (req, res) => {

  res.setHeader("content-type", "text/html");

  fs.readFile("./index.html", (err, data) => {
    if(err) {

      res.end(err);

    } else if (data) {

      res.end(data);
    }    
  });
}).listen(3200);

// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

http.createServer( (req, res) => {
  let parsedUrl = url.parse(req.url);

  if (parsedUrl.pathname === '/') {

    res.writeHead( 201, {'content-Type': 'text/html'} );
    fs.createReadStream('./index.html').pipe(res);

  } else if (parsedUrl.pathname === '/about') {

    res.writeHead( 201, {'content-Type': 'text/html'} );
    fs.createReadStream('./about.html').pipe(res);   
    
  } else if (parsedUrl.pathname === '/contact') {

    res.writeHead( 201, {'content-Type': 'text/html'} );
    fs.createReadStream('./contact.html').pipe(res);   
    
  } else {
      res.end("Page Not Found")
  }

}).listen(3001);

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response

const echoServer = http.createServer(requestHandler);

function requestHandler(req, res) {

  let store = "";

  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    
    if(req.method === 'POST') {

      res.end(store);

    } else {

        res.statusCode = 404;
        res.end('Invalid Method');

    }
  });
}

echoServer.listen(3200, () => console.log('server has started'));

// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  
  let store = "";
  req.on('data', (c) => {
    store += c; 
  });

  req.on('end', () => {
    let parsedData = qs.parse(store);
    if(req.method === 'POST') {

      // res.end(store);
      res.end(JSON.stringify(parsedData));

    } else {
        res.statusCode = 404;
        res.end('Invalid Method');
    }
  });
}
server.listen(3200, () => {
  console.log("server started");
});

// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  
  let store = "";
  req.on('data', (c) => {
    store += c; 
  });

  req.on('end', () => {
    let parsedData = qs.parse(store);
    if(req.method === 'POST') {

      res.end(JSON.stringify(parsedData));

    } else {
        res.statusCode = 404;
        res.end('Invalid Method');
    }
  });
}
server.listen(3200, () => {
  console.log("server started");
});

// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  if(req.method === 'GET') {
    let parsedUrl = url.parse(req.url, true);

    res.end("Protocol - " + JSON.stringify(parsedUrl.protocol) + "\nPath - " + JSON.stringify(parsedUrl.path)+ "\nPathName - " + JSON.stringify(parsedUrl.pathname) + "\nQuery - " + JSON.stringify(parsedUrl.query));
  }
}
server.listen(7000, () => {
  console.log("Server Started");
});
// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node


// Relative Path
const indexRelative = require('./app.js')
// Absolute Path
const path = require('path');
const indexAbsolute = path.join(__dirname, 'index.js');
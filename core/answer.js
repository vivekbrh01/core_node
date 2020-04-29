7. // Write respective headers object below.

// General Header

Request URL: https://altcampus.io/
Request Method: GET
Status Code: 200 
Remote Address: 128.199.85.71:443
Referrer Policy: no-referrer-when-downgrade

// Response Header
access-control-allow-credentials: true
access-control-allow-origin: *
access-control-expose-headers: 
cache-control: max-age=0, private, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Wed, 29 Apr 2020 18:35:56 GMT
server: nginx/1.10.3 (Ubuntu)
status: 200
x-content-type-options: nosniff
x-content-type-options: nosniff
x-download-options: noopen
x-frame-options: SAMEORIGIN
x-frame-options: DENY
x-permitted-cross-domain-policies: none
x-request-id: 2o55samfii2r5ffevk00hjih
x-xss-protection: 1; mode=block

// Request Header

:authority: altcampus.io
:method: GET
:path: /
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,* / *;q=0.8,application/signed-exchange;v=b3;q=0.9
accept-encoding: gzip, deflate, br
accept-language: en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7
cache-control: no-cache
cookie: _ga=GA1.2.452089496.1580200616; track_uid=8b6eb83f-9c8c-901d-51cc-7e82087b8495; _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYZ3JFWTZKQ1Z1NWkzNXVxYjBWV284dz09.oGcfmDvaD7FEgieNO4DqahCWa8V4uBl4YZNLW8KqD5Q; _gid=GA1.2.730900825.1588185349; _gat_gtag_UA_121886584_1=1
pragma: no-cache
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: none
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36


8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4


const http = require('http');
const url = require('url');
const data = url.parse('http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4')

let server =  http.createServer(requestHandler);

function requestHandler(req, res) {
    console.log(data);
    res.end();
}
server.listen(4200, () => console.log('server started'));



//Parsed object
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3000',
  port: '3000',
  hostname: 'localhost',
  hash: null,
  search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  query: 'token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  pathname: '/api/v3',
  path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
  href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
}
9. // Write parsed query object

let http = require('http');
let url = require('url');


let server =  http.createServer(requestHandler);

function requestHandler(req, res) {

    let urlParse = url.parse('http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4', true)
    console.log(urlParse.query);
    
    res.end();
}
server.listen(3200, () => console.log('server started'));

// Output
[Object: null prototype] { token: '8372fcb8y2874b2t478t6t48cbtbc72t4' }
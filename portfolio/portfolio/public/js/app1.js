let http = require('http');
let fs = require('fs');
let url = require('url');
let imagesArray = "png jpeg jpg".split(" ");
http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url);

    if (parsedUrl.pathname === '/') {

        res.writeHead( 201, {'content-Type': 'text/html'} );
        fs.createReadStream('../../templates/index.html').pipe(res);

    } else if (parsedUrl.pathname === '/index.html') {

        res.writeHead( 201, {'content-Type': 'text/html'} );
        fs.createReadStream('../../templates/index.html').pipe(res);   

    } else if (parsedUrl.pathname === '/visit') {

        res.writeHead( 201, {'content-Type': 'text/html'} );
        fs.createReadStream('../../templates/visit.html').pipe(res);   
        
    } else if (parsedUrl.pathname === '/register') {

        res.writeHead( 201, {'content-Type': 'text/html'} );
        fs.createReadStream('../../templates/register.html').pipe(res);   
        
    } else if (parsedUrl.pathname.includes ('main.css') ) {
        res.writeHead( 201, {'content-Type': 'text/css'} );
        fs.createReadStream('../css/main.css').pipe(res);

    } else {
        for (let i=0; i< imagesArray.length; i++) {
            if(parsedUrl.pathname.endsWith(imagesArray[i])) {
                res.writeHead( 201, {'content-Type': 'image/jpeg'} );
                res.writeHead( 201, {'content-Type': 'image/jpg'} );
                res.writeHead( 201, {'content-Type': 'image/png'} );
                fs.createReadStream('.' + req.url).pipe(res);

                break;
            }
        }
       
    }
}).listen(3200);
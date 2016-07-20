var http = require("http");

var port = process.argv[2];
//console.log("port = %s", port);

var server = http.createServer(function (req, resp) {
    var content = "";
    req.on('data', function (chunk) {
        //console.log("Received body data:");
        //console.log(chunk.toString());
        content += chunk.toString();
    });

    req.on('end', function () {
        // empty 200 OK response for now
        resp.writeHead(200, "OK", { 'Content-Type': 'text/html' });
        resp.write(content.toUpperCase());
        //console.log(content.toUpperCase());
        resp.end();
    });
});

server.listen(port);

var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var filePath = process.argv[3];
//console.log("port = %s", port);
//console.log("filePath = %s", filePath);

var server = http.createServer(function (req, resp) {
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(resp);
});

server.listen(port);

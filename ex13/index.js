var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
//handle["/"] = requestHandlers.start;
handle["/api/parsetime"] = requestHandlers.parseTime;
handle["/api/unixtime"] = requestHandlers.unixTime;

server.start(router.route, handle);
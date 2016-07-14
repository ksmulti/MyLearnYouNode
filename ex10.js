var net = require("net");

/* 左邊補0 */
function padLeft(str, len) {
    str = '' + str;
    return str.length >= len ? str : new Array(len - str.length + 1).join("0") + str;
}

/* 右邊補0 */
function padRight(str, len) {
    str = '' + str;
    return str.length >= len ? str : str + new Array(len - str.length + 1).join("0");
}

var port = process.argv[2];
var server = net.createServer(function (socket) {
    var date = new Date();
    var str = "";
    str += date.getFullYear();
    str += "-";
    str += padLeft((date.getMonth() + 1).toString(), 2);
    str += "-";
    str += padLeft(date.getDate().toString(), 2);
    str += " ";
    str += date.getHours();
    str += ":";
    str += date.getMinutes();

    socket.write(str);
    socket.end("\n");
});

server.listen(port);

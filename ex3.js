var fs = require("fs");

filePath = process.argv[2];
var buf = fs.readFileSync(filePath);
var str = buf.toString();
var strArray = str.split("\n");
var countNewline = strArray.length - 1;

console.log("%d", countNewline);
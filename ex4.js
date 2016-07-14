var fs = require("fs");

function readFileOK(err, data)
{
	if (err) throw err;
	
	var str = data.toString();
	var strArray = str.split("\n");
	var countNewline = strArray.length - 1;

	console.log("%d", countNewline);
}

filePath = process.argv[2];
fs.readFile(filePath, readFileOK);

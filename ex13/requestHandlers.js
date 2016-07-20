var querystring = require('querystring'); 

function parseTime(response, urlparse) 
{
	console.log("Request handler 'parseTime' was called.");
	
	console.log(urlparse.query);
	var qstrParse = querystring.parse(urlparse.query);
	console.log(qstrParse.iso);
	
	var date = new Date(qstrParse.iso); 
	var output = {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
	console.log(output);
	
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.write(JSON.stringify(output));
	response.end();
}

function unixTime(response, urlparse) 
{
	console.log("Request handler 'unixTime' was called.");

	console.log(urlparse.query);
	var qstrParse = querystring.parse(urlparse.query);
	console.log(qstrParse.iso);

	var date = new Date(qstrParse.iso);
	var output = { unixtime: date.getTime() }
	console.log(output);
	
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.write(JSON.stringify(output));
	response.end();
}

exports.parseTime = parseTime;
exports.unixTime = unixTime;
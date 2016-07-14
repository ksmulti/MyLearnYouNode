var http = require("http");

http.get(process.argv[2], (res) => 
	{
		//console.log(`STATUS: ${res.statusCode}`);
		//console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
		var str = "";
		
		res.on('data', (chunk) => 
			{
				//console.log(chunk.toString());
				str += chunk.toString();
			});
		
		res.on('end', () => 
			{
				console.log(str.length);
				console.log(str);
			});
	}).on('error', (e) => 
	{
			console.log(`Got error: ${e.message}`);
	}
);
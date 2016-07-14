var http = require("http");

http.get(process.argv[2], (res) => 
	{
		//console.log(`Got response: ${res.statusCode}`);
		// consume response body
		//res.resume();
		
		res.on('data', (chunk) => 
			{
				console.log(chunk.toString());
			});
	}).on('error', (e) => 
	{
		console.log(`Got error: ${e.message}`);
	}
);
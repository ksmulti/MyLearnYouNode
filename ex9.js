var http = require("http");

function httpGetAndSaveContent(url, Array, index)
{
	http.get(url, (res) => 
		{
			var str = "";
			
			res.on('data', (chunk) => 
				{
					str += chunk.toString();
				});
			
			res.on('end', () => 
				{
					//console.log(str);
					Array[index] = str;
				});
		}).on('error', (e) => 
		{
				console.log(`Got error: ${e.message}`);
		}
	);
}

var Array = [ "", "", "" ];
httpGetAndSaveContent(process.argv[2], Array, 0);
httpGetAndSaveContent(process.argv[3], Array, 1);
httpGetAndSaveContent(process.argv[4], Array, 2);

var myVar = setInterval(checkArray, 1000);

function checkArray() 
{	
	var checkOK = true;
    for (i in Array)
	{
		if (Array[i] == "")
			checkOK = false;
	}
	
	if (checkOK === true)
	{
		for (i in Array)
			console.log(Array[i]);
	}
	clearInterval(myVar);
}


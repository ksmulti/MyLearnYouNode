function printArray(err, dataArray)
{
	if (err)
		console.log(err);
	else
	{
		for (i in dataArray)
			console.log(dataArray[i]);
	}	
}

var myModule =  require("./ex6_mymodule.js");

var dict = process.argv[2];
var filter = process.argv[3];
myModule(dict, filter, printArray);
var fs = require("fs");

function printFile(err, list)
{
	for (i in list)
	{
		var pointPos = list[i].lastIndexOf(".");
		if (pointPos != -1)
		{
			var ext = list[i].slice(pointPos);
			
			if (ext == "." + filter)
			{
				console.log(list[i]);
			}			
		}		
	}
}

dict = process.argv[2];
filter = process.argv[3];
fs.readdir(dict, printFile);

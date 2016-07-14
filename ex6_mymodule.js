var fs = require("fs");

function ListFileByExt(dict, filter, callback)
{
	fs.readdir(dict, 
		function checkFile(err, list)
		{
			if (err) 
				return callback(err);
			
			var dataArray = [];
			for (i in list)
			{
				var pointPos = list[i].lastIndexOf(".");
				if (pointPos != -1)
				{
					var ext = list[i].slice(pointPos);
					
					if (ext == "." + filter)
					{
						dataArray.push(list[i]);
					}
				}
			}
			
			callback(null, dataArray)
		}
	);
}

module.exports = ListFileByExt;

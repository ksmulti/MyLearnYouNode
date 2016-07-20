var url = require("url");

function route(handle, request, response) 
{
	var urlparse = url.parse(request.url);
	var pathname = urlparse.pathname;
	console.log("About to route a request for " + pathname);
	
	if (typeof handle[pathname] === 'function') 
	{
		handle[pathname](response, urlparse);
	} 
	else
	{
		console.log("No request handler found for " + pathname);
		
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("not found");
		response.end();
	}
}

exports.route = route;
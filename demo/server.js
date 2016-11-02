{
	const HTTP = require('http'),
		  URL = require('url');

	function start(route, handle, port = 8888){
		HTTP.createServer((request, response) => {
			let postData = '',
				pathname = URL.parse(request.url).pathname;
			route(handle, pathname, response, request);
		}).listen(port);

	}

	exports.start = start;
}
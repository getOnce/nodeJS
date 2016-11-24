{
	const http = require('http'),
	url = require('url'),
	start = (route, handle) => {
		http.createServer((request, response) => {
			let pathname = url.parse(request.url).pathname;
			route(pathname, handle);
		})
		.listen(8888)
	}
	exports.start = start;
}
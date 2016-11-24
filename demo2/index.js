{
	const service = require('./service'),
	handlers = require('./handlers'),
	route = require('./route'),
	hanle = {},
	events = [
		[
			'/',
			'start'
		],
		[
			'/start',
			'start'
		],
		[
			'/upload',
			'upload'
		]
	],
	delegate = () => {
		events.forEach(function(item, index, arr){
			hanle[item[0]] = handlers[1];
		})
	}
	delegate();
	service.start(route, hanle);
}
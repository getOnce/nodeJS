{
	const SERVER = require('./server'),
		  ROUTE = require('./router'),
		  RHandlers = require('./requestHandlers'),
		  handle = {};

	handle['/'] = RHandlers.start;	  
	handle['/start'] = RHandlers.start;
	handle['/upload'] = RHandlers.upload;
	handle['/show'] = RHandlers.show;
	
	SERVER.start(ROUTE.ROUTE, handle);
}
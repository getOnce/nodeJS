{
	const fs = require('fs');
	let asyc = new Promise(function(resolve, reject){
		fs.readFile('./file.txt', 'binary', function(err, data){
			if(err){
				reject(err);
				return false;
			}
			resolve(data);
		})
	});
	asyc.then(
		function(data){
			process.send(data);
		},
		function(err){
			process.send('错误');
		}
	);
	process.on('message', function(data){
		console.log('Child got message:', data.msg);
	});
	process.send({data: 'data'});
	
}
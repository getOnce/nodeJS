{
	const childProcess = require('child_process');

	/* fork */
	// let c1 = childProcess.fork('./c1.js');
	// c1.on('message', function(msg){
	// 	console.log(msg);
	// });
	// c1.send({
	// 	msg: 'hello'
	// });
	
	/* spawn */
	//let c2 = childProcess.spawn('mv', ['./Promise2.js' , './Promise.js']);
	//let c2 = childProcess.spawn('git', ['add' , '.']);
	
	/* exec */
	// let c3 = childProcess.exec('git add .', function(err, stdout, stderr){
	// 	console.log(stdout);
	// 	console.log(stderr);
	// 	console.log(err);
	// });

	/* execFile*/
	let c4 = childProcess.execFile('./c2.sh', function(err, stdout, stderr){
		console.log(err);
		console.log(stdout);
		console.log(stderr);
	});

}
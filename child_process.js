{
	const childProcess = require('child_process');
	//spawn启动一个子进程来执行命令
	let cp = childProcess.spawn('node', ['worker.js']);
	//exec启动一个子进程来执行命令，与spawn不同之处是，其接口不同，它有一个回调函数获知子进程的状况
	let cp = childProcess.exec('node worker.js', function(err, stdout, stderr){
		//code...
	});
	//execFile启动一个子进程来执行可执行文件。
	let cp = childProcess.execFile('worker.js', function(err, stdout, stderr){
		//code...
	});
	//fork与spawn类似， 不同点在于它创建Node的子进程只需指定要执行的javascript文件模块即可
	let cp = childProcess.fork('./worker.js');
	//spawn与exec和execFile不同之处在于，后两者可以设置超时时间，一旦创建进程的时间超时就会被杀死
	//exec与execFile不同之处在于，exec适合执行已有命令，execFile适合执行文件

	//与主进程互通信息
	//parent.js
	cp.on('message', function(m){
		console.log('PARENT got message:' , m);
	});
	cp.send({
		hello: 'world'
	});
	//sub.js
	process.on('message', function(m){
		console.log('CHILD got message:', m);
	});
	process.send({
		foo: 'bar'
	});


}
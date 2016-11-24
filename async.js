{
	const async = require('async'),
		  fs = require('fs');
	//异步串行方法
	async.series(
		[
			(callback) => {
				fs.readFile('file1.txt', 'utf-8', callback);
			},
			(callback) => {
				fs.readFile('file2.txt', 'utf-8', callback);
			}
		],
		(err, results) => {
			//results => [file1.txt, file2.txt]
		}
	);
	//异步并行方法
	async.parallel(
		[
			(callback) => {
				fs.readFile('file1.txt', 'utf-8', callback);
			},
			(callback) => {
				fs.readFile('file2.txt', 'utf-8', callback);
			}
		],
		(err, results) => {
			//
		}
	);
	//异步调用依赖处理
	async.waterfall(
		[
			(callback) => {
				fs.readFile('file1.txt', 'utf-8', (err, content) => {callback(err, content);});
			},
			(arg1, callback) => {
				//arg1 => file2.txt
				fs.readFile(arg1, 'utf-8', (err, content) => {callback(err, content);});
			},
			(arg1, callback) => {
				//arg1 => file3.txt
				fs.readFile(arg1, 'utf-8', (err, content) => {callback(err, content);});
			}
		],
		(err, reulsts) => {
			//file4.txt
		}
	);
	//异步自动依赖处理 auto

}	
















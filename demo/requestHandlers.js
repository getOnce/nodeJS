{
	const EXEC = require('child_process').exec,
		  QUERYSTRING = require('querystring'),
		  FORMIDABLE = require('formidable'),
		  FS = require('fs'),
		  start = (response, request) => {
		
		// EXEC("ls -lah", (error, stdout, stderr) => {
		// 	response.writeHead(200, {"Content-Type":"text/plain"});
	 //    	response.write(stdout);
	 //    	response.end();
		// });
		var body ='<html>'+
	    '<head>'+
	    '<meta http-equiv="Content-Type" content="text/html; '+
	    'charset=UTF-8" />'+
	    '</head>'+
	    '<body>'+
	    '<form action="/upload" enctype="multipart/form-data" '+
	    'method="post">'+
	    '<input type="file" name="upload">'+
	    '<input type="submit" value="Upload file" />'+
	    '</form>'+
	    '</body>'+
	    '</html>';
	    response.writeHead(200,{"Content-Type":"text/html"});
    	response.write(body);
    	response.end();

	},
	upload = (response, request) => {
  		var form =new FORMIDABLE.IncomingForm();
		form.parse(request, function(error, fields, files){
		    FS.renameSync(files.upload.path, "./tmp/test.jpg");
		    response.writeHead(200, {"Content-Type": "text/html"});
		    response.write("received image:<br/>");
		    response.write("<img src='/show' />");
		    response.end();
		});
	},
	show = (response, request) => {

		FS.readFile("./tmp/test.jpg", "binary", function(error, file){
			if(error){
				response.writeHead(500, {"Content-Type": "text/plain"});
				response.write(error + '\n');
				response.end();
			}else{
				response.writeHead(200, {"Content-Type": "image/png"});
				response.write(file, 'binary');
				response.end();
			}
		})

	}

	exports.start = start;
	exports.upload = upload;
	exports.show = show;
}




































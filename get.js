var http = require("http");

var urlPath='http://127.0.0.1:8124/biz?' +
    'name=freddon&domain='+encodeURIComponent("http://www.sagosoft.com/");
http.get(urlPath, function(response) {
    response.setEncoding('utf-8');
    console.log("状态码 %d \nheaders:\n %s \n当前的请求方式为【GET】请求",response.statusCode,
        JSON.stringify(response.headers));
    var receiveData = "";
    response.on('data', function (chunk) {
        receiveData += chunk;
    }).on('end', function () {
        //打印
        console.log("\n获得的数据为：" + receiveData);
    });

}).on('error', function(e) {
    console.log(e.message);
});

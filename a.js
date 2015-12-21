var http = require("http");
var port = 8083;

http.createServer(function(request,response)
{
console.log(request);
response.writeHead(200,{'Content-Type':'text/plain'});
response.end("content of File");
}).listen(++port);
console.log('Started at port : '+port);
process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
    if (options.cleanup) console.log('clean');
    if (err) console.log(err.stack);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));


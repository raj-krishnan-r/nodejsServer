var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var url = require('url');
var fs = require('fs');
//console.log(url.parse('http://www.google.com'));
app.get('/*',function(req,res)
{
//res.sendFile(__dirname+'/index.html');
var forwardFile = __dirname+url.parse(req.url).path;
console.log(forwardFile);
fs.stat(forwardFile, function(err, stats) {
            if (err) {
             //   throw err;
                console.log(err);
                res.sendFile(__dirname+'/index.html');

            }
            else{
res.sendFile(__dirname+url.parse(req.url).path);
            }
            });
});

io.on('connection',function(socket){
console.log('A user Connected');
socket.on('disconnect',function(){
console.log('One User Disconnected');
socket.on('chat message',function(msg)
{
io.emit('disconnected','dis');
});
});
socket.on('chat message',function(msg)
{
//console.log('\n '+msg+'');
io.emit('chat message',msg);
});
socket.on('click num',function(msg)
{
//console.log('\n '+msg+'');
io.emit('click num',msg);

});
});

http.listen(3000,function()
{
console.log('listening on *:3000');
});

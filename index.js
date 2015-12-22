var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/',function(req,res)
{
res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
console.log('A user Connected');
socket.on('disconnect',function(){
console.log('One User Disconnected');
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

http.listen(3001,function()
{
console.log('listening on *:3001');
});

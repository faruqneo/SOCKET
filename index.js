const express = require('express')
const path = require('path')
const socketIO = require('socket.io')

//Init app
const app = express()

//Set index page
app.get('/',function(req, res){
    res.sendFile(path.join(__dirname,'/index.html'));
});

//check socket is connected
io.on('connect', function(socket){
    console.log('connected');
});

//Listen port in 3000
app.listen(3000, function(req, res){
    console.log('server is running');
});

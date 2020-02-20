
var webtelnet = require('./webtelnet-proxy');
var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var app = express().use(express.static('./www'));
var httpserver = http.createServer(app);
const webhost = '0.0.0.0';
const webport = 7171;
const telnethost = '221.4.216.93';
const telnetport = 1864;
httpserver.listen(webport, webhost, function () {
  console.log('listening on ' + webhost + ':' + webport);
});

// create socket io
var io = socketio.listen(httpserver);

// create webtelnet proxy and bind to io
var webtelnetd = webtelnet(io, telnetport, telnethost);

// if you need charset conversion from gbk to utf8
webtelnetd.setCharset('gbk');
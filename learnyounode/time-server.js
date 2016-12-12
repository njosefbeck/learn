/*
Your server should listen to TCP connections on the port provided by the
first argument to your program. For each connection you must write the
current date & 24 hour time in the format:

 "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be
zero-filled to 2 integers. For example:

 "2013-07-06 17:42"

After sending the string, close the connection.
*/

var net = require('net');

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}

function now() {
    var date = new Date();
    return date.getFullYear() + '-'
        + zeroFill(date.getMonth() + 1) + '-'
        + zeroFill(date.getDate()) + ' '
        + zeroFill(date.getHours()) + ':'
        + zeroFill(date.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));
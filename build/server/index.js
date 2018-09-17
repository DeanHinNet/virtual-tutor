const express = require('express')
const bodyParser = require('body-parser')
const port = 8080

const app = express()

const server = require('http').createServer(app);
const io = require('socket.io')(server)


app.use(bodyParser.json())

server.listen(port, () => {
    console.log(`Virtual tutor listening on port ${port}`)
})
app.use(express.static(__dirname + '/../client/dist'))

io.on('connection', (client) => {
    socket.on('mousemove', function(data) {
        socket.id = data.id;
        io.emit('moving', data);
    });
    socket.on('disconnect', function() {
    socket.broadcast.emit('left', socket.id);
    });
  });




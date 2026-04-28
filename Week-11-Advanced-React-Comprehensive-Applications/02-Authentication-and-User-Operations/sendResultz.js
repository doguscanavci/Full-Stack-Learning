const chokidar = require('chokidar');
const io = require('socket.io-client');
const socket = io.connect('https://backend.api.workintech.com.tr');

const fileWatcher = chokidar.watch('.');

fileWatcher.on('change', (path) => {
  if (path === 'resultz.json') {
    socket.emit('projectUpdate', {"sId":310408,"title":"S11_D2_O1"});
  }
});
const nodemon = require('nodemon');
const path = require('path');

nodemon({
  execMap: {
    js: 'node'
  },
  script: path.join(__dirname, 'server/server'),
  ignore: [],
  watch: process.env.NODE_ENV !== 'production' ? ['server/*'] : false,
  ext: 'js'
})
.on('restart', function() {
  console.log('Server restarted!');
})
.once('exit', function () {
  console.log('Shutting down server');
  process.exit();
});

// const express = require('express');
// const path = require('path');
// const port = process.env.PORT || 8080;
// const app = express();


// app.use(express.static(__dirname));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/public/index.html'))
// });

// app.listen(port);
// console.log('Sever started');
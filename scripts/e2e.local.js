const childProcess = require('child_process');
const path = require('path');
const express = require('express');

const app = express();

const BUILD_PATH = path.resolve(__dirname, '..', 'dist');
const PORT = 8080;

app.use(express.static(BUILD_PATH));

const instance = app.listen(PORT, function(err) {
  if (err) {
    console.error(err);
  }
  console.log(`Serving ${BUILD_PATH} at port ${PORT}`);

  const child = childProcess.exec(
    path.resolve(__dirname, '../node_modules/.bin/protractor')  + ' ./config/protractor.local.conf.js',
    function(error, stdout, stderr) {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`${stdout}`);
      console.log(`${stderr}`);
    }
  );

  if (child) {
    child.on('exit', function() {
      instance.close();
    });
  }
});

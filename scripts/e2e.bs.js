const childProcess = require('child_process');
const path = require('path');
const express = require('express');
var browserstack = require('browserstack-local');
let _isEmpty = require('lodash/isEmpty');

var bs_local = new browserstack.Local();
var bs_local_args = {
  'key': process.env.BROWSERSTACK_ACCESS_KEY,
  'forcelocal': true,
  'v': true
  // 'onlyAutomate': true,
  // 'force': true
};

const app = express();

const BUILD_PATH = path.resolve(__dirname, '..', 'dist');
const PORT = 8080;

app.use(express.static(BUILD_PATH));

const instance = app.listen(PORT, function(err) {
  if (err) {
    console.error(err);
  }
  console.log(`Serving ${BUILD_PATH} at port ${PORT}`);

  bs_local.start(bs_local_args, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Connected to Browserstack. Now testing...');
      const child = childProcess.spawn(
        path.resolve(__dirname, '../node_modules/.bin/protractor'), ['./config/protractor.bs.conf.js']
      );

      if (child) {
        child.stdout.on('data', (data) => {
          if(`${data}`.trim()) {
            console.log(`${data}`);
          }
        });

        child.stderr.on('data', (data) => {
          if(`${data}`.trim()) {
            console.log(`${data}`);
          }
        });

        // child.on('error', (data) => {
        //   console.log(data);
        //   if(bs_local) {
        //     bs_local.stop(function() {
        //       console.log('Stopped browserstack');
        //
        //     });
        //     instance.close();
        //     process.exit(0);
        //   }
        // })

        child.on('exit', function() {
          if(bs_local) {
            bs_local.stop(function() {
              console.log('Stopped browserstack');

            });
            instance.close();
            process.exit(0);
          }
        });
      }
    }
  });
});

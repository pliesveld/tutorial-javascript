fs = require('fs');

fs.readFile('node/file.json', 'utf8', (err, data) => {

  if (err) {
    return console.log(err);
  }

  task = JSON.parse(data);
  console.log(task);

});



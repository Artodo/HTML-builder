const fs = require('fs');


const readFile = () => {
  fs.readFile('01-read-file/text.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
}

readFile();

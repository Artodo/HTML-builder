const fs = require('fs');
const path = require('path');

const readFile = () => {
const filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath);
readStream.pipe(process.stdout);

}

readFile();



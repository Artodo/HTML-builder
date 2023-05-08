const fs = require('fs');
const path = require('path');
const process = require('node:process');

const DESTINATION_FILE = path.join('./02-write-file/text.txt');

const writeFile = () => {
  const stream = fs.createWriteStream(DESTINATION_FILE, 'utf-8');
  console.log('Введите текст:');

  process.stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
      console.log('Выход');
      process.exit();
    }
    else {
      stream.write(data, 'utf-8');
    }
  });
  process.addListener('SIGINT', () => {
    console.log('Выход');
    process.exit();
  });
};

writeFile();
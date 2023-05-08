const fs = require('fs');

const DESTINATION_FOLDER = './04-copy-directory/files-copy';
const SOURCE_FOLDER = './04-copy-directory/files';

fs.mkdir(DESTINATION_FOLDER, { recursive: true }, err => {
  if (err) throw err;
  console.log('Папка успешно создана');


  fs.readdir(SOURCE_FOLDER, (err, files) => {
    if (err) throw err;
    console.log('В папке находятся файлы:' + files);

    files.forEach(file => {
      fs.copyFile(`${SOURCE_FOLDER}/${file}`, `${DESTINATION_FOLDER}/${file}`, err => {
        if (err) throw err;
      
      });
    });
  });


});



const fs = require('fs');

const DESTINATION_FOLDER = './04-copy-directory/files-copy';
const SOURCE_FOLDER = './04-copy-directory/files';

const copyDirectory = (source, destination) => {
  fs.mkdir(destination, { recursive: true }, err => {
    if (err) throw err;
    console.log('Папка успешно создана');

    fs.readdir(source, (err, files) => {
      if (err) throw err;
      console.log('В папке находятся файлы:' + files);

      files.forEach(file => {
        fs.copyFile(`${source}/${file}`, `${destination}/${file}`, err => {
          if (err) throw err;

        });
      });
    });

  });
};

copyDirectory(SOURCE_FOLDER, DESTINATION_FOLDER);

exports.copyDirectory = copyDirectory;

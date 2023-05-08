const fs = require('fs');

const DESTINATION_FOLDER = './04-copy-directory/files-copy';
const SOURCE_FOLDER = './04-copy-directory/files';

const copyDirectory = (source, destination) => {
  fs.mkdir(destination, { recursive: true }, err => {
    if (err) throw err;
    console.log('Папка успешно создана');

    fs.readdir(source, { withFileTypes: true }, (err, files) => {
      if (err) throw err;

      files.forEach(file => {
        if (file.isFile()) {
          fs.copyFile(`${source}/${file.name}`, `${destination}/${file.name}`, err => {
            if (err) throw err;
          });
        }
      });

    });

  });
};

copyDirectory(SOURCE_FOLDER, DESTINATION_FOLDER);

exports.copyDirectory = copyDirectory;

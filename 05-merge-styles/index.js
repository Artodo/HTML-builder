const fs = require('fs');
const path = require('path');

const SOURCE_FOLDER = './05-merge-styles/styles';
const DESTINATION_FILE = './05-merge-styles/project-dist/bundle.css';

const mergeStyles = (source, destination) => {
  fs.open(destination, 'w', (err) => {
    if (err) throw err;
    console.log('File created');
  });

  fs.readdir(source, (err, files) => {
    if (err) throw err;
    console.log('В папке находятся файлы:' + files);

    files.forEach(file => {
      const name = path.extname(file);
      const extName = name.slice(1);

      if (extName === 'css') {
        console.log('Это файл формата ' + extName);

        fs.readFile(source + '/' + file, 'utf8', (err, data) => {
          if (err) throw err;

          fs.appendFile(destination, data, (err) => {
            if (err) throw err;
            console.log('Данные добавлены !');
          });
        });
      }
    });
  });
};

mergeStyles(SOURCE_FOLDER, DESTINATION_FILE);

exports.mergeStyles = mergeStyles;
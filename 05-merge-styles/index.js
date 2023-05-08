const fs = require('fs');
const path = require('path');


fs.open('./05-merge-styles/project-dist/bundle.css', 'w', (err) => {
    if(err) throw err;
    console.log('File created');
});


fs.readdir('./05-merge-styles/styles', (err, files) => {
  if (err) throw err;
  console.log('В папке находятся файлы:' + files);

  files.forEach(file => {
    const name = path.extname(file);
    const extName = name.slice(1);
    // console.log(extName);

    if (extName === 'css') {
      console.log('Это файл формата ' + extName);

      fs.readFile('./05-merge-styles/styles/' + file, 'utf8', (err, data) => {
        if (err) throw err;
        // console.log(data);

        fs.appendFile('./05-merge-styles/project-dist/bundle.css', data, (err) => {
          if(err) throw err;
          console.log('Данные добавлены !');
      });
      });
    }
  });
});












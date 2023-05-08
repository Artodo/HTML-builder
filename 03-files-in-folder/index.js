const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const path = require('path');

const TEST_FOLDER = './03-files-in-folder/secret-folder/';

async function filesInFolder() {
  try {
    await readdir(TEST_FOLDER, { withFileTypes: true }, (err, files) => {
      if (err) throw err;

      files.forEach(async file => {
        if (file.isFile()) {
          const fileFullPath = TEST_FOLDER + file.name;
          const fileNameArr = file.name.split(".");

          let result = fileNameArr[0];

          const name = path.extname(file.name);
          const extName = name.slice(1);

          result += " - " + extName;

          await stat(fileFullPath, (err, fileStats) => {
            if (err) throw err;
            else {
              result += " - " + fileStats.size;
              console.log(result);
            }
          });
        }

      });

    });
  } catch (err) {
    console.log(err);
  }
}

filesInFolder();



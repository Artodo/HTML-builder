const fs = require('fs');
const promise = require('fs/promises');

const DESTINATION_FOLDER = './04-copy-directory/files-copy';
const SOURCE_FOLDER = './04-copy-directory/files';

const copyDirectory = async (source, destination) => {

  fs.mkdir(destination, { recursive: true }, async err => {
    if (err) throw err;
    console.log('Папка успешно создана');

    const destinationFiles = await promise.readdir(destination, 'utf8');

    for (let destinationFile of destinationFiles) {
      await promise.unlink(destination + "/" + destinationFile);
    }

    const sourceFiles = await promise.readdir(source, { withFileTypes: true });
    for (let sourceFile of sourceFiles) {
      if (sourceFile.isFile()) {
        await promise.copyFile(`${source}/${sourceFile.name}`, `${destination}/${sourceFile.name}`);
      }
    }

  });
};

copyDirectory(SOURCE_FOLDER, DESTINATION_FOLDER);

exports.copyDirectory = copyDirectory;

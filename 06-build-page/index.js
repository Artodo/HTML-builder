const fs = require('fs');
const promise = require('fs/promises');
const { copyDirectory } = require('../04-copy-directory');
const { mergeStyles } = require('../05-merge-styles');

const DESTINATION_FOLDER_COMPONENTS = './06-build-page/components';
const DESTINATION_FOLDER = './06-build-page/project-dist';
const DESTINATION_FOLDER_ASSETS = DESTINATION_FOLDER + '/assets';
const SOURCE_FOLDER_ASSETS = './06-build-page/assets';
const SOURCE_FOLDER_CSS = './06-build-page/styles';
const DESTINATION_FILE_CSS = DESTINATION_FOLDER + '/style.css';


const copyAssets = () => {
  copyDirectory(SOURCE_FOLDER_ASSETS + "/fonts", DESTINATION_FOLDER_ASSETS + "/fonts");
  copyDirectory(SOURCE_FOLDER_ASSETS + "/img", DESTINATION_FOLDER_ASSETS + "/img");
  copyDirectory(SOURCE_FOLDER_ASSETS + "/svg", DESTINATION_FOLDER_ASSETS + "/svg");
}

const buildPage = async () => {
  fs.mkdir(DESTINATION_FOLDER, { recursive: true }, async err => {
    if (err) throw err;
    console.log('Папка успешно создана');

    copyAssets();
    mergeStyles(SOURCE_FOLDER_CSS, DESTINATION_FILE_CSS);

    let result = await promise.readFile('./06-build-page/template.html', 'utf8');

    const components = await promise.readdir(DESTINATION_FOLDER_COMPONENTS, 'utf8');

    for (let component of components) {
      const content = await promise.readFile(DESTINATION_FOLDER_COMPONENTS + "/" + component, 'utf8');
      const componentName = component.split(".")[0];
      result = result.replace(`{{${componentName}}}`, content);
    };

    await promise.writeFile(DESTINATION_FOLDER + '/index.html', result);
  });


};

(async () => {
  buildPage();
})();
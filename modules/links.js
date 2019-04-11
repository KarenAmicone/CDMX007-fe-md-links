const app = require('../cli');
const colors = require('colors');
colors.setTheme({
  stats: ['magenta', 'bold']
});

const mdLinks = (data, mdFile, givenPath) => {
  const firtsArray = data.match(/\((https?:\/\/[^)]+)\)/g);
  if (firtsArray == null){
    console.log(`No hay links en el archivo ${mdFile}`.stats);
  }else{
  const toStringLinksArray = firtsArray.toString();
  const linksArray = toStringLinksArray.match(/https?:\/\/[^\) \' \" \s]+/g);
  app.typeOfValidation(linksArray, mdFile, givenPath);
  };
};

const uniqueLinks = (linksArray) => {
  const uniqueArray= linksArray.filter((element, index, array) =>
    array.indexOf(element) == index);
    return uniqueArray;
};

module.exports.mdLinks = mdLinks;
module.exports.uniqueLinks = uniqueLinks;
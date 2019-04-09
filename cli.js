#!/usr/bin/env node
const index = require('./index');
const links = require('./links');
const infoRequired = process.argv.splice(2);
const validate = infoRequired.includes('--validate');
const stats = infoRequired.includes('--stats');

if(infoRequired.length > 0) {
    if(infoRequired[0] !== '--validate' && infoRequired[0] !== '--stats') {
        index.lookFor(infoRequired[0]);
    } else {
        console.log(`No proporcionaste una ruta, leeré los archivos .md de la carpeta actual`.rainbow);
        index.lookFor('./');
    }
  };

  const typeOfValidation = (linksArray, File, Path) => {
    if(validate && stats) {
        links.countigValidatedLinks(linksArray, File, Path);
    } else if (stats){
        links.counting(linksArray, File, Path);
    } else if (validate) {
        links.validatingLinks(linksArray, File, Path);   
    }
  }

  module.exports.typeOfValidation = typeOfValidation;

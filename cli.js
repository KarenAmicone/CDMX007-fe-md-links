#!/usr/bin/env node
const index = require('./modules/index');
const validateFile = require('./modules/validate');
const statsFile = require('./modules/stats');
const statsValidate = require('./modules/stats_validate');
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
        statsValidate.countigValidatedLinks(linksArray, File, Path);
    } else if (stats){
        statsFile.counting(linksArray, File, Path);
    } else if (validate) {
        validateFile.validatingLinks(linksArray, File, Path);   
    }
  }

  module.exports.typeOfValidation = typeOfValidation;

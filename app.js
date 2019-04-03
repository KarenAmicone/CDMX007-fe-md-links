const index = require('./index');
const links = require('./links');
const infoRequired = process.argv.splice(2);
const validate = infoRequired.includes('--validate');
const stats = infoRequired.includes('--stats');

if(infoRequired.length > 0) {
    if(infoRequired[0] !== '--validate' && infoRequired[0] !== '--stats') {
        index.lookFor(infoRequired[0]);
        
    } else {
        index.lookFor('./');
    }
  };

  const typeOfValidation = (linksArray, File, Path) => {
    if(validate && stats) {
        console.log('Falta esta función :/')
    } else if (stats){
        links.counting(linksArray, File, Path);
    } else if (validate) {
        links.vandS(linksArray, File, Path);
        
    }
  }

  module.exports.typeOfValidation = typeOfValidation;

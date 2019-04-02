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

  const typeOfValidation = (linksArray) => {
    if(validate) {
        links.validating(linksArray);
    } else if (stats){
        links.counting(linksArray);
        //No funciona validate y stats
    }else if ((infoRequired.includes('--validate') && infoRequired.includes('--stats'))) {
        links.validatePlusStats(linksArray);
    }
  }

  module.exports.typeOfValidation = typeOfValidation;

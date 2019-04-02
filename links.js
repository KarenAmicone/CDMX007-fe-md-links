const app = require('./app');
const mdLinks = (data) =>{
   const httpRegExp = /(https?:\/\/[^\s]+)/g; 
   const linksArray = data.match(httpRegExp);
   app.typeOfValidation(linksArray);
};

const validating = (linksArray) => {
console.log(`Estás validando ${linksArray}`);
};

const counting = (linksArray) => {
const uniqueLinks=
//Adaptado de: https://bit.ly/2UtoZ31
linksArray.filter((x, i, a) => 
   a.indexOf(x) == i);
console.log(`Hay ${linksArray.length} links en total y ${uniqueLinks.length} links únicos`);
};

const validatePlusStats = (linksArray) => {
console.log(`Estás validando y contando ${linksArray}`);
};

module.exports.mdLinks = mdLinks;
module.exports.validating = validating;
module.exports.counting = counting;
module.exports.validatePlusStats = validatePlusStats;
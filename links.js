const app = require('./app');
const https = require('https');
const http = require('http');

const mdLinks = (data) => {
  const httpRegExp = /(https?:\/\/[^\s]+)/g;
  const linksArray = data.match(httpRegExp);
  app.typeOfValidation(linksArray);
};


const validating = (linksArray) => {
  linksArray.forEach((element) => {
   //Para peticiones https
    if (element.match(/(https:\/\/[^\s]+)/g)) {
      https.get(element, (res) => {
          console.log(`${element} / statusCode: ${res.statusCode}`);
        })
        .on('error', (e) => {
         return e
        })
   //Para peticiones http
    } else if (element.match(/(http:\/\/[^\s]+)/g)) {
      http.get(element, (res) => {
        const {
          statusCode
        } = res;
        console.log(`${element} / statusCode: ${statusCode}`)
      }).on('error', (e) => {
        return e
      });
    }
  });
}

const counting = (linksArray) => {
  const uniqueLinks =
    //El método usado en uniqueLinks fue encontrado en: https://bit.ly/2UtoZ31
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

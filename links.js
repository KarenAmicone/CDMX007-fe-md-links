const app = require('./cli');
const https = require('https');
const http = require('http');
const colors = require('colors');
colors.setTheme({
  stats: ['magenta', 'bold']
});

const mdLinks = (data, mdFile, givenPath) => {
  const httpRegExp = /(https?:\/\/[^\) \' \" \s]+)/g;
  const linksArray = data.match(httpRegExp);
  app.typeOfValidation(linksArray, mdFile, givenPath);
};

const counting = (linksArray, File, Path) => {
  //El método usado en uniqueLinks fue encontrado en: https://bit.ly/2UtoZ31
  const uniqueLinks =
    linksArray.filter((x, i, a) =>
      a.indexOf(x) == i);
  console.log(
    `Total de links: ${linksArray.length} 📊
    Links únicos: ${uniqueLinks.length} ✅ 
    En el archivo: ${File} 
    De la carpeta: ${Path}`.stats);
};

let statusArray = [];
const validating = (linksArray, File, Dir) => {
  const linksNumber = linksArray.length;
  let processedLinks = 0;
  return new Promise(resolve => {
    linksArray.forEach((element) => {
      //Peticiones https
      if (element.match(/(https:\/\/[^\')]+)/g)) {
        https.get(element, (res) => {
            statusArray.push({
              Dir,
              File,
              Text: element,
              Status: res.statusCode
            });
            processedLinks++;
            if (processedLinks === linksNumber) {
              resolve(statusArray)
            }
          })
          .on('error', (e) => {
            statusArray.push(e);
            processedLinks++;
            if (processedLinks === linksNumber) {
              resolve(statusArray)
            }
          })

        //Peticiones http
      } else if (element.match(/(http:\/\/[^\']+)/g)) {
        http.get(element, (res) => {
          statusArray.push({
            Dir,
            File,
            Text: element,
            Status: res.statusCode
          });
          processedLinks++;
          if (processedLinks === linksNumber) {
            resolve(statusArray)
          }
        }).on('error', (e) => {
          statusArray.push(e);
          processedLinks++;
          if (processedLinks === linksNumber) {
            resolve(statusArray)
          }
        });
      }
    });
    processedLinks++;
    if (processedLinks === linksNumber) {
      resolve(statusArray)
    }
  })
};


async function validatingLinks(linksArray, File, Dir) {
  let result = await validating(linksArray, File, Dir);
  console.log(result);
}

const countigValidatedLinks = async (linksArray, File, Dir) => {
  let result = await validating(linksArray, File, Dir);
  let brokenArray = [];
  let okArray = [];
  result.forEach((element) => {
    if (element.Status == 200 || element.Status == 202) {
      okArray.push(element);
    } else if (element.port == 443) {
      brokenArray.push(element);
    } else {
      brokenArray.push(element)
    }
  });
  const uniqueLinks =
    linksArray.filter((x, i, a) =>
      a.indexOf(x) == i);
  
  const extraErrors = (linksArray.length - (brokenArray.length+okArray.length));

  console.log(
    ` Total de links: ${linksArray.length} 📊
  Links únicos: ${uniqueLinks.length} ✅ 
  Links con algún error: ${brokenArray.length} 😨 
  Links correctos: ${okArray.length} 👍
  Links con un tipo de error no encontrado: ${extraErrors} ❌`.stats);
}


module.exports.mdLinks = mdLinks;
module.exports.validating = validating;
module.exports.counting = counting;
module.exports.validatingLinks = validatingLinks;
module.exports.countigValidatedLinks = countigValidatedLinks;

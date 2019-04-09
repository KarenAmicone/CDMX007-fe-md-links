const app = require('./cli');
const https = require('https');
const http = require('http');
const colors = require('colors');
colors.setTheme({
  stats: ['magenta', 'bold']
});

const mdLinks = (data, mdFile, givenPath) => {
  const firtsArray = data.match(/\((https?:\/\/[^)]+)\)/g);
  if (firtsArray == null){
    console.log(`No hay links en el archivo .md`.stats);
  }else{
  const toStringLinksArray = firtsArray.toString();
  const linksArray = toStringLinksArray.match(/https?:\/\/[^\) \' \" \s]+/g);
  app.typeOfValidation(linksArray, mdFile, givenPath);
  };
};

const uniqueLinks = (linksArray) => {
  const uniqueArray= linksArray.filter((x, i, a) =>
    a.indexOf(x) == i);
    return uniqueArray;
}

const printStats = (linksArray, uniqueArray, File, Path) => {
  console.log(
    `Total de links: ${linksArray.length} 📊
    Links únicos: ${uniqueArray.length} ✅ 
    En el archivo: ${File} 
    De la carpeta: ${Path}`.stats);
};

async function counting (linksArray, File, Dir) {
    let result = await uniqueLinks(linksArray);
    printStats(linksArray, result, File, Dir)
  }

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
  let unique = await uniqueLinks(linksArray);
  let result = await validating(unique, File, Dir);
  console.log(result);
}

let brokenArray = [];
let redirectionsArray =[];
let okArray = [];

const definingStatus = (result) => {
result.forEach((element) => {
    if (element.Status >= 200 && element.Status <=226) {
      okArray.push(element);
    } else if (element.port == 443) {
      brokenArray.push(element);
    } else if(element.Status >= 300 && element.Status <=307){ 
      redirectionsArray.push(element);
    } else {
      brokenArray.push(element);
    };
  });
};

const printStatsValidate=(linksArray, uniqueLinks, File, Dir) => {
console.log(
    `
  Archivo ${File}, de la carpeta ${Dir}:   
  Total de links: ${linksArray.length} 📊
  Links únicos: ${uniqueLinks.length} ✅
        Respuestas Satisfactorias: ${okArray.length} 👍
        Redirecciones: ${redirectionsArray.length} 👉
        Errores: ${brokenArray.length} 😨 
  `.stats);
};


const countigValidatedLinks = async (linksArray, File, Dir) => {
    let result = await uniqueLinks(linksArray);
    let validated = await validating(result, File, Dir);
    await definingStatus(validated);
    printStatsValidate(linksArray, result, File, Dir);
}


module.exports.mdLinks = mdLinks;
module.exports.validating = validating;
module.exports.counting = counting;
module.exports.validatingLinks = validatingLinks;
module.exports.countigValidatedLinks = countigValidatedLinks;

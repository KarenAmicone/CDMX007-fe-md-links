const links = require('./links');
const validateFile = require('./validate');

let brokenClientArray = [];
let redirectionsArray =[];
let okArray = [];
let infoArray= [];
let brokenServerArray = [];

const definingStatus = (result) => {
result.forEach((element) => {
    if (element.Status >= 200 && element.Status <=226) {
      okArray.push(element);
    } else if (element.Status >= 100 && element.Status <=102){
      infoArray.push(element);
    } else if (element.port == 443) {
      brokenClientArray.push(element);
    } else if(element.Status >= 300 && element.Status <=307){ 
      redirectionsArray.push(element);
    } else if(element.Status >= 400 && element.Status <=431){
      brokenClientArray.push(element);
    } else {
      brokenServerArray.push(element);
    }
  });
};

const printStatsValidate=(linksArray, uniqueLinks, File, Dir) => {
console.log(
    `
  Archivo ${File}, de la carpeta ${Dir}`.blue);

  console.log(  
  `
  Total de links: ${linksArray.length} 📊
  Links únicos: ${uniqueLinks.length} ✅
        Respuestas informativas: ${infoArray.length} 📄
        Respuestas Satisfactorias: ${okArray.length} 👍
        Redirecciones: ${redirectionsArray.length} 👉
        Errores de cliente: ${brokenClientArray.length} ⁉️  
        Errores de servidor: ${brokenServerArray.length} 👎
  `.stats);
};


const countigValidatedLinks = async (linksArray, File, Dir) => {
    let result = await links.uniqueLinks(linksArray);
    let validated = await validateFile.validating(result, File, Dir);
    await definingStatus(validated);
    printStatsValidate(linksArray, result, File, Dir);
}

module.exports.countigValidatedLinks = countigValidatedLinks;
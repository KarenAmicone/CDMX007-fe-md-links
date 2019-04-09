const links = require('./links');
const validateFile = require('./validate');

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
    let result = await links.uniqueLinks(linksArray);
    let validated = await validateFile.validating(result, File, Dir);
    await definingStatus(validated);
    printStatsValidate(linksArray, result, File, Dir);
}

module.exports.countigValidatedLinks = countigValidatedLinks;
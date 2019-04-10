const links = require('./links');

const printStats = (linksArray, uniqueArray, File, Path) => {
    console.log(
      `
      Archivo ${File} de la carpeta ${Path}
          Total de links: ${linksArray.length} 📊
          Links únicos: ${uniqueArray.length} ✅ 
      `.stats);
  };
  
  async function counting (linksArray, File, Dir) {
      let result = await links.uniqueLinks(linksArray);
      printStats(linksArray, result, File, Dir)
    };

    module.exports.counting = counting;
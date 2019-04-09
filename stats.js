const links = require('./links');

const printStats = (linksArray, uniqueArray, File, Path) => {
    console.log(
      `Total de links: ${linksArray.length} 📊
      Links únicos: ${uniqueArray.length} ✅ 
      En el archivo: ${File} 
      De la carpeta: ${Path}`.stats);
  };
  
  async function counting (linksArray, File, Dir) {
      let result = await links.uniqueLinks(linksArray);
      printStats(linksArray, result, File, Dir)
    };

    module.exports.counting = counting;
const fs = require('fs');
const path = require('path');


const lookForReadMe =
fs.readdir('./', (err, files) => {
if(err){
    console.log("Error");
} else{
    console.log(files);
    files.forEach(element => {
    if(path.extname(element) === ".md"){
       let mdFile= element;
       fs.readFile(`./${mdFile}`, 'utf8', (err,data) =>
            {
                if(err)
                    console.log(err)
                else
                    console.log(data);
            });
    } else{
        console.log("No existe el archivo .md")
    }   
    });
}
});

module.exports = lookForReadMe;

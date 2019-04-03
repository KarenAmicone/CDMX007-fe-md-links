const fs = require('fs');
const path = require('path');
const links = require('./links');


const lookForReadMe =  (givenPath)  => {
    fs.readdir(givenPath, (err, files) => {
    if(err){
        console.log("Error");
    } else{
        files.forEach(element => {
        if(path.extname(element) === ".md"){
        let mdFile= element;
        fs.readFile(`${givenPath}/${mdFile}`, 'utf8', (err,data) =>
                {
                    if(err){
                        console.log(err)
                    }else
                        links.mdLinks(data, mdFile, givenPath);

                });
        }
        });
    }
    });
};

module.exports.lookFor = lookForReadMe;





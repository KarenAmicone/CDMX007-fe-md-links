const links = require('./links');
const https = require('https');
const http = require('http');
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
              resolve(statusArray);
            }
          })
          .on('error', (e) => {
            statusArray.push(e);
            processedLinks++;
            if (processedLinks === linksNumber) {
              resolve(statusArray);
            };
          });

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
            resolve(statusArray);
          };
        }).on('error', (e) => {
          statusArray.push(e);
          processedLinks++;
          if (processedLinks === linksNumber) {
            resolve(statusArray);
          };
        });
      }; 
    });
    processedLinks++;
    if (processedLinks === linksNumber) {
      resolve(statusArray);
    };
  });
};


async function validatingLinks(linksArray, File, Dir) {
  let unique = await links.uniqueLinks(linksArray);
  let result = await validating(unique, File, Dir);
  console.log(result);
};

module.exports.validatingLinks = validatingLinks;
module.exports.validating = validating;
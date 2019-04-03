const https = require('https');
const http = require('http');
const linksArray=['http://google.com','http://google.com', 'https://lms.laboratoria.la/cohorts/cdmx-2019-01-bc-core-cdmx-2019-01-bc-core-am/courses/diseno-visual/01-fundamentos-de-diseno-visual/00-historia-del-diseno-web']

let statusArray=[];
    const validatePlusStats = (linksArray, File) => {
      const linksNumber = linksArray.length;
      let processedLinks = 0;
      return new Promise(resolve =>{
            linksArray.forEach((element) => {
             if (element.match(/(https:\/\/[^\s]+)/g)) {
               https.get(element, (res) => {
                statusArray.push({File, Text: element, Status: res.statusCode});
                processedLinks++;
                if(processedLinks === linksNumber) {
                  resolve(statusArray)
                }
              })
              .on('error', (e) => {
                statusArray.push(e);
                processedLinks++;
                if(processedLinks === linksNumber) {
                  resolve(statusArray)
                }
              })
              
            //Para peticiones http
             } else if (element.match(/(http:\/\/[^\s]+)/g)) {
               http.get(element, (res) => {
                statusArray.push({File, Text: element, Status: res.statusCode});
                processedLinks++;
                if(processedLinks === linksNumber) {
                  resolve(statusArray)
                }
               }).on('error', (e) => {
                 statusArray.push(e);
                 console.log(statusArray);
                 processedLinks++;
                 if(processedLinks === linksNumber) {
                  resolve(statusArray)
                }
                });
              }
            }); 
            
      }) 
};

async function vandS(linksArray, File) {
  let result = await validatePlusStats(linksArray, File);
  console.log(result);
}
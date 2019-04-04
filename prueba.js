const https = require('https');
const http = require('http');
/*const linksArray= '(https://nodejs.org/en/), (https://nodejs.org/docs/latest-v0.10.x/api/modules.html)., (http://semver.org/), http://algo.com/2/3/'
  
const xyz = () => {
const httpRegExp = /(https?:\/\/[^\)]+)/g;
  const x = linksArray.match(httpRegExp);
  console.log(x);
}

xyz();
 */

const newArr= [ '(https://daringfireball.net/projects/markdown/syntax)' ]
newArr.forEach((element)=>{
  if (element.match(/(https:\/\/[^\')]+)/g)) {
    https.get(element, (res) => {
        console.log(element, res.statusCode)
        })
        .on('error', (e) => {
          return e;
        })
      } else if (element.match(/(http:\/\/[^\']+)/g)) {
        http.get(element, (res) => {
          console.log(element, res.statusCode);
          })
          .on('error', (e) => {
            return e;
          })
        }
})



/* let statusArray=[];
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
} */
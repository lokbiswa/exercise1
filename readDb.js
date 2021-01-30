const axios = require('axios')
const bodyParser = require('body-parser');
function readApi(){
  let dataReturn;
  url = "https://jobs.github.com/positions.json?description=python&location="
  axios({
    method: 'get',
    url: url,
    data: {}
  })
  .then(function(response){
    dataReturn = response.data
  });
  return dataReturn;
}

module.readApi = readApi();
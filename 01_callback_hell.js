var request = require('request')

var options = {
  url: 'https://api.github.com/users/up1',
  headers: {
    'User-Agent': 'request'
  }
};

function getDataFromAPI(callback) {
  request(options, function (error, response, body) {
    callback(JSON.parse(body))
  })
}

function print(result){
  console.log(JSON.stringify(result, null, "\t"))
}

getDataFromAPI(print)

var fetch = require('node-fetch')

function getDataFromAPI() {
    return fetch("https://api.github.com/users/up1")
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data, null, "\t")))
}

getDataFromAPI()

var fetch = require('node-fetch')

async function getDataFromAPI() {
    let response = await fetch("https://api.github.com/users/up1")
    let data = await response.json()
    console.log(JSON.stringify(data, null, "\t"))
}

getDataFromAPI()

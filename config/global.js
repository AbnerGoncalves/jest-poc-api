const request = require('supertest')
let url

if (process.env.ENVIRONMENT === 'URL1') {
  url = process.env.BASE_URL_1
}

if (process.env.ENVIRONMENT === 'URL2') {
  url = process.env.BASE_URL_2
}

if (process.env.ENVIRONMENT === 'URL3') {
  url = process.env.BASE_URL_3
}

if (!process.env.ENVIRONMENT) {
  console.error('A variavel de ambiente não foi definida corretamente!!!')
}

global.request = request(url)

const request = require('supertest')
let url

if (process.env.ENVIRONMENT === 'UAT3') {
  url = process.env.BASE_URL_ST
}

if (process.env.ENVIRONMENT === 'UAT2') {
  url = process.env.BASE_URL_UAT2
}

if (process.env.ENVIRONMENT === 'UAT1') {
  url = process.env.BASE_URL_UAT1
}

if (!process.env.ENVIRONMENT) {
  console.error('A variavel de ambiente não foi definida corretamente!!!')
}

global.request = request(url)

const route = ''

describe('Suite', () => {
  it.only('Validar status code 204', async () => {
    const body = require ('fixtures/api-test.body.json')
    const headers = { 'Content-Type': 'application/json'}

    await request.get(route).set(headers).send(body).expect()
  })
})

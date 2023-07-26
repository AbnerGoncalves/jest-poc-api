const route = '/v1/portabilities'

describe('Suite', () => {
  it.only('Validar status code 204', async () => {
    const body = require ('fixtures/post-portabilities.body.json')
    const headers = { 'Content-Type': 'application/json'}

    await request.get(route).set(headers).send(body).expect(400)
  })
})

const route = '/v1/portabilities/customer?msisdn=13981115401&socialSecNo=06439717421&identityNumber=11324976'

describe('Suite', () => {
  it('Validar status code 204', async () => {
    const headers = { 'Content-Type': 'application/json'}

    await request.get(route).set(headers).expect(500)
  })
})

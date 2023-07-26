const route = '/api/user/sign-up'

describe('Suite', () => {
  it('Validar status code 400', async () => {
    const body = require('fixtures/sign-in.body.json')
    const headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-ONMOTORIDNOTIFICATIONa': 'e8LOoxXS_EA0sAn22whCtv:APA91bHvU1GLMsKod-I07EH_afs3rZH9bWWBm0GB0LzFSJM-vymzEn4oIXhAXUXGAaPhwjLMEfEmXZh-cB7xvF4JzLJ5TYhJ5KQy5iWOqfXSWOmcfTaeaCIsTjZRDbi0uJ9LY-qAKpub',
    'X-ONMOTORIDDEVICE':'2023-07-20-10-30-00-cxx7ba76-xx09-xx67-xx6f-7b07777355fe-51b2c06b-c02b-4606-xxfd-84ff1b4321xx'
    }

    await request.post(route).set(headers).send(body).then(resp=>{
      expect(resp.status).toBe(400)
      expect(resp.body.success).toBe(false)
      expect(resp.body.checked).toBe(false)
      expect(resp.body.message).toBe('Este procedimento está temporariamente bloqueado, tente novamente mais tarde. (e8)')
    })
  })
})

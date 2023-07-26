const route = '/api/user/send-confirm-email'

describe('Suite', () => {
  it('Validar status code 400', async () => {
    const headers = { 
    'Authorization':'Bearer XXX',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-ONMOTORIDNOTIFICATIONa': 'e8LOoxXS_EA0sAn22whCtv:APA91bHvU1GLMsKod-I07EH_afs3rZH9bWWBm0GB0LzFSJM-vymzEn4oIXhAXUXGAaPhwjLMEfEmXZh-cB7xvF4JzLJ5TYhJ5KQy5iWOqfXSWOmcfTaeaCIsTjZRDbi0uJ9LY-qAKpub',
    'X-ONMOTORIDDEVICE':'2023-07-20-10-30-00-cxx7ba76-xx09-xx67-xx6f-7b07777355fe-51b2c06b-c02b-4606-xxfd-84ff1b4321xx',
    'X-ONMOTORINFOa': '{"osVersao":1, "sistema":"iOS", "marca":"Apple", "modelo":"iPhone 11", "appBuild":1, "appVersao":1}'
    }

    await request.get(route).set(headers).then(resp=>{
        expect(resp.status).toBe(400)
        expect(resp.body.success).toBe(false)
        expect(resp.body.message).toBe("Não foi possível enviar este email agora, tente novamente mais tarde.")
    })
  })
})

const request = require('supertest')
const app = require('../app')

test('Obtener listado de usuarios', ()=>{
    request(app)
    .get('/users')
    .expect(200)

    console.log(resp.body);

    expect(Array.isArray(resp.body)).toBe(true)

})


describe('Busqueda de usuarios', ()=>{
    test('Cuando exista lo encuentra', ()=>{
        const resp = await request(app)
        .get('/users/test@test.comm')
        .expect(404)

        expect(resp.body.error).toBeTruthy();
        expect(resp.body.error).toBe('No existe')
    })
})



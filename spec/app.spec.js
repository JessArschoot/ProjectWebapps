let Request = require('request');

var url = 'http://localhost:3000/API/';
var token;

describe("API Login", () => {
    let data = {};

    beforeAll((done) => {
        Request({
            method: 'POST',
            uri: 'http://localhost:3000/API/users/login',
            json: true,
            body: {
                username: 'jessarschoot',
                password: 'azerty123456'
            }
        }, (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            token = data.body.token;
            done();
        });
    });

    it('Logged in', () => {
        expect(data.status).toBe(200);
    });

    it('Respond with token', () => {
        expect(data.body.token).toBeDefined();
    });
});

describe("like article", ()=> {
    let data = {};

    beforeAll((done) => {
        Request({
            method: 'POST',
            uri: 'http://localhost:3000/API/article/add-like/5a22ac82780fe3001438cdb4',
            json: true,
            body: {
                username: 'jessarschoot'
            }
        }, (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        }).auth(null, null, true, token);
    });

    it('Like succeeded', () => {
        expect(data.status).toBe(200);
    });
})

describe("like is added", () => {
    let data = {};

    beforeAll((done) => {
    
            Request({
                method: 'GET',
                uri: 'http://localhost:3000/API//article/5a22ac82780fe3001438cdb4',
                json: true,
            }, (error, response, body) => {
                data.body = body;
                done();
            }).auth(null, null, true, token);
        })

    it('like added', () => {
        expect(data.body.likes.length).toBe(1);
    });
        
})

describe("unlike article", ()=> {
    let data = {};

    beforeAll((done) => {
        Request({
            method: 'POST',
            uri: 'http://localhost:3000/API/article/remove-like/5a22ac82780fe3001438cdb4',
            json: true,
            body: {
                username: 'jessarschoot'
            }
        }, (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
        }).auth(null, null, true, token);
    });

    it('un like succeeded', () => {
        expect(data.status).toBe(200);
    });

})
describe("like is removed", () => {
    let data = {};

    beforeAll((done) => {
    
            Request({
                method: 'GET',
                uri: 'http://localhost:3000/API//article/5a22ac82780fe3001438cdb4',
                json: true,
            }, (error, response, body) => {
                data.body = body;
                done();
            }).auth(null, null, true, token);
        })

    it('like removed', () => {
        expect(data.body.likes.length).toBe(0);
    });
        
})
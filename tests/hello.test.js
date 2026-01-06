const request = require('supertest');
const app = require('../server');

describe('GET /hello', () => {
  it('should return Hello message', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello, DevOps World!');
  });
});

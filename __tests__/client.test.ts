import assert from 'assert';
import request from 'supertest';
import { server } from '../src/app';

describe('Client test', () => {
  it('should create client', async (done) => {
    await request(server)
      .post('/clients')
      .send({ name: 'John' })
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        assert(response.body.name, 'John');
        done();
      })
      .catch((e) => done(e));
  });
  it('should update client', async (done) => {
    await request(server)
      .post('/clients')
      .send({ name: 'John' })
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        assert(response.body.name, 'John');
        done();
      })
      .catch((e) => done(e));
  });
  afterAll(() => {
    server.close();
  });
});

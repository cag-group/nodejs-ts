import app from '../../src/app';
import { expect } from 'chai';
import * as chai from 'chai';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("Users resource", () => {
  describe('GET /api/v1/users', () => {
    it('should respond with a JSON array containing user names', () => {
      return chai.request(app.express).get('/api/v1/users')
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res.body).to.eql(['Kalle', 'Nisse']);
        });
    });
  });
});

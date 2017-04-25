import app from '../../src/app';
import { expect} from 'chai';
import * as chai from 'chai';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("Bakery", () => {
  describe('GET /api/v1/bakery', () => {
    it('responds with JSON array', () => {
      return chai.request(app).get('/api/v1/bakery/cookies')
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.length(2);
        });
    });

    it('should return cookies', () => {
      return chai.request(app).get('/api/v1/bakery/cookies')
        .then(res => {
          expect(res.body).to.eql(['Bulle', 'Kaka']);
        });
    });
  });
});
import app from '../../src/app';
import { expect } from 'chai';
import * as chai from 'chai';
import { Worker } from '../../src/worker';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("Bakery", () => {
  let worker: DummyWorker;
  before(() => {
    app.worker = worker = new DummyWorker();
  });

  describe('GET /api/v1/bakery/cookies', () => {
    it('responds with JSON array', () => {
      return chai.request(app.express).get('/api/v1/bakery/cookies')
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.length(2);
        });
    });

    it('should return cookies', () => {
      return chai.request(app.express).get('/api/v1/bakery/cookies')
        .then(res => {
          expect(res.body).to.eql(['Bulle', 'Kaka']);
        });
    });
  });

  describe('POST /api/v1/bakery/stuff', () => {
    it('process stuff in worker', () => {
      return chai.request(app.express).post('/api/v1/bakery/stuff')
        .then(res => {
          expect(res.status).to.equal(204);
          expect(res.body).to.be.empty;
          expect(worker.startCtr).to.be.eq(1);
        });
    });
  });
});

class DummyWorker implements Worker {
  public startCtr = 0;

  startJob(): void {
    this.startCtr++;
  }
}
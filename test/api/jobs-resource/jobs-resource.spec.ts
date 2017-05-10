import { Api } from '../../../src/api/api';
import { expect } from 'chai';
import * as chai from 'chai';
import { Worker } from '../../../src/worker';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("Jobs resource", () => {
  let worker: DummyWorker;
  let api: Api;
  before(() => {
    worker = new DummyWorker();
    api = new Api(worker);
  });

  describe('POST /api/v1/jobs', () => {
    it('should start a job in a worker', () => {
      return chai.request(api.express).post('/api/v1/jobs')
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
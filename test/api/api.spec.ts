import { Api } from '../../src/api/api';
import * as chai from 'chai';
import { expect } from 'chai';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("Api", () => {
  let app: Api;
  before(() => {
    app = new Api();
  });

  describe('GET /api/v1/ping', () => {
    it('should return overall application status', () => {
      return chai.request(app.express).get('/api/v1/ping')
        .then(res => {
          expect(res.body.message).to.eql('OK');
        });
    });
  });
});
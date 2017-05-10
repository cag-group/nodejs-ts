import { App } from '../src/app';
import * as chai from 'chai';
import { expect } from 'chai';
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("App", () => {
  let app: App;
  before(() => {
    app = new App();
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
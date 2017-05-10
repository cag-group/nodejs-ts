import * as express from 'express';
import * as bodyParser from 'body-parser';
import { jobsHandler } from './v1-resource/jobs-resource/jobs-router';
import { Worker } from '../worker';
import { v1Router } from './v1-resource/v1-router';

/**
 * The main application that creates and configures an ExpressJS web server.
 */
export class Api {

  /** The Express instance */
  public express: express.Application;

  /**
   * Run configuration methods on the Express instance.
   */
  constructor(worker?: Worker,
              private loggerMiddleware?: express.RequestHandler) {
    this.express = express();
    jobsHandler.configure(worker);
    this.middleware();
    this.routes();
  }

  /**
   * Configure Express middleware.
   */
  private middleware(): void {
    if (this.loggerMiddleware) {
      this.express.use(this.loggerMiddleware);
    }
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));
  }

  /**
   * Configure API endpoints.
   */
  private routes(): void {
    this.express.use('/api/v1', v1Router);
  }
}
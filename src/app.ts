import * as express from 'express';
import * as bodyParser from 'body-parser';
import { jobsHandler } from './v1/jobs-resource/jobs-router';
import { Worker } from './worker';
import { v1Router } from './v1/v1-router';

/**
 * The main application that creates and configures an ExpressJS web server.
 */
export class App {

  /** The Express instance */
  public express: express.Application;

  /**
   * Run configuration methods on the Express instance.
   */
  constructor(worker?: Worker, private loggerMiddleware?: express.RequestHandler) {
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
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    this.express.use('/api/v1', v1Router);
  }
}
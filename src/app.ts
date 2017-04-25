import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import bakeryRouter from './bakery/bakery-router'

/**
 * The main application that creates and configures an ExpressJS web server.
 */
class App {

  /** The Express instance */
  public express: express.Application;

  /**
   * Run configuration methods on the Express instance.
   */
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  /**
   * Configure Express middleware.
   */
  private middleware(): void {
    this.express.use(logger('dev'));
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
    let router = express.Router();
    // placeholder route handler
    router.get('/ping', (req, res) => {
      res.json({
        message: 'OK'
      });
    });
    this.express.use('/api/v1', router);
    this.express.use('/api/v1/bakery', bakeryRouter);
  }

}

export default new App().express;
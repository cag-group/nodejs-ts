import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
const Cookies = require('./data');

export class BakeryRouter {
  router: Router;

  /**
   * Initialize the BakeryRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all cookies.
   */
  public getCookies(req: Request, res: Response, next: NextFunction) {
    res.send(Cookies);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/cookies', this.getCookies);
  }

}

// Create the BakeryRouter, and export its configured Express.Router
const bakeryRoutes = new BakeryRouter();
bakeryRoutes.init();

export default bakeryRoutes.router;
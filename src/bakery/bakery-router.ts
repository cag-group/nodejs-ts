import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { Worker } from '../worker';

const Cookies = ['Bulle', 'Kaka'];

export class BakeryRouter {
  router: Router;
  worker: Worker;

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

  public postStuff(req: Request, res: Response, next: NextFunction) {
    this.worker.startJob();
    res.status(204).send();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/cookies', this.getCookies);
    this.router.post('/stuff', (req, res, next) => this.postStuff(req, res, next));
  }

}

// Create the BakeryRouter, and export its configured Express.Router
const bakeryRoutes = new BakeryRouter();
bakeryRoutes.init();

export default bakeryRoutes;
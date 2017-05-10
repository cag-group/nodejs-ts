import {
  NextFunction,
  Request,
  Response,
  Router
} from 'express';
import { JobsHandler } from './jobs-handler';

const jobsHandler = new JobsHandler();
const jobsRouter: Router = Router();

function postJob(req: Request, res: Response, next: NextFunction) {
  jobsHandler.startJob();
  res.status(204).send();
}

jobsRouter.post('/', postJob);

export {
  jobsHandler,
  jobsRouter
}



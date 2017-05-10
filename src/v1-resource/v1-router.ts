import {
  NextFunction,
  Request,
  Response,
  Router
} from 'express';
import { jobsRouter } from './jobs-resource/jobs-router';
import { usersRouter } from './users-resource/users-router';

const v1Router: Router = Router();

function getPing(req: Request, res: Response, next: NextFunction) {
  res.json({
    message: 'OK'
  });
}

v1Router.get('/ping', getPing);
v1Router.use('/jobs', jobsRouter);
v1Router.use('/users', usersRouter);

export { v1Router };
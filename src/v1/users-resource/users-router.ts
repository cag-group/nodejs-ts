import {
  NextFunction,
  Request,
  Response,
  Router
} from 'express';

const users = ['Kalle', 'Nisse'];

const usersRouter: Router = Router();

function getUsers(req: Request, res: Response, next: NextFunction) {
  res.send(users);
}

usersRouter.get('/', getUsers);

export { usersRouter };
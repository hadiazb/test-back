import { Router } from 'express';
import Container from 'typedi';
import UserApi from './UserApi';

class UserRoutes {
	constructor() {
		this.router = Router();
		this.Routes();
	}

	public router: Router;

	public Routes() {
		const userApi = Container.get(UserApi);

		this.router.get('/', async (req, res) => userApi.GetUsers(req, res));
		this.router.get('/:id', async (req, res) => userApi.GetUserById(req, res));
		this.router.delete('/:id', async (req, res) =>
			userApi.DeleteUserById(req, res)
		);
		this.router.post('/', async (req, res) => userApi.CreateUser(req, res));
		this.router.put('/:id', async (req, res) =>
			userApi.UpdateUserById(req, res)
		);
	}
}

const userRouter = new UserRoutes();
userRouter.Routes();

export default userRouter.router;

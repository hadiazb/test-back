import { Router } from 'express';
import Container from 'typedi';
import UserApi from './UserApi';
// import { IUserController } from '../interfaceAdapters/IUserController';
// import { UserController } from '../interfaceAdapters/UserController';

class UserRoutes {
	constructor() {
		this.router = Router();
		this.Routes();
	}

	public router: Router;

	public Routes() {
		const userApi = Container.get(UserApi);

		this.router.post('/', async (req, res) => userApi.CreateUser(req, res));
		this.router.get('/', async (req, res) => userApi.GetUsers(req, res));
		this.router.get('/:url', async (req, res) => userApi.GetUserById(req, res));
		this.router.put('/:url', async (req, res) =>
			userApi.UpdateUserById(req, res)
		);
		this.router.delete('/:url', async (req, res) =>
			userApi.DeleteUserById(req, res)
		);
	}
}

const userRouter = new UserRoutes();
userRouter.Routes();

export default userRouter.router;

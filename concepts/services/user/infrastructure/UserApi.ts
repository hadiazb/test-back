import { Request, Response } from 'express';
import { Service } from 'typedi';
import { UserController } from '../interfaceAdapters/UserController';

@Service()
export default class UserApi {
	constructor(private readonly userController: UserController) {}

	public async GetUsers(req: Request, res: Response) {
		await this.userController
			.GetUsers()
			.then((response) => {
				res.send(response);
			})
			.catch((err) => console.log(err));
	}

	public async GetUserById(req: Request, res: Response) {
		await this.userController
			.GetUserById(req.params.id)
			.then((response) => {
				res.send(response);
			})
			.catch((err) => console.log(err));
	}

	public async CreateUser(req: Request, res: Response) {
		await this.userController
			.CreateUser(req.body)
			.then((response) => {
				res.send(response);
			})
			.catch((err) => console.log(err));
	}

	public async UpdateUserById(req: Request, res: Response) {
		res.send('Update user by id.');
	}

	public async DeleteUserById(req: Request, res: Response) {
		res.send('Delete user by id.');
	}
}

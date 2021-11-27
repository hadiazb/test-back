import { Request, Response } from 'express';
import { Service } from 'typedi';
import { UserController } from '../interfaceAdapters/UserController';

@Service()
export default class UserApi {
	constructor(private readonly userController: UserController) {}

	public async GetUsers(req: Request, res: Response) {
		const response = await this.userController.GetUsers();
		return res.json(response);
	}

	public async CreateUser(req: Request, res: Response) {
		res.send('Create');
	}

	public async GetUserById(req: Request, res: Response) {
		res.send('Get user by id.');
	}

	public async UpdateUserById(req: Request, res: Response) {
		res.send('Update user by id.');
	}

	public async DeleteUserById(req: Request, res: Response) {
		res.send('Delete user by id.');
	}
}

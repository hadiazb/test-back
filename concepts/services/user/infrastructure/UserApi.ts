import { Request, Response } from 'express';
import { Service } from 'typedi';
import { Sockets } from '../../../sockets/socket';
import { UserController } from '../interfaceAdapters/UserController';

@Service()
export default class UserApi {
	constructor(private readonly userController: UserController) {}

	public async GetUsers(req: Request, res: Response) {
		await this.userController
			.GetUsers()
			.then((response) => {
				Sockets.emmit('list', response);
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
				Sockets.emmit('create-user', response);
				res.send(response);
			})
			.catch((err) => console.log(err));
	}

	public async UpdateUserById(req: Request, res: Response) {
		await this.userController
			.UpdateUserById(req.params.id, req.body)
			.then((response) => {
				res.send(response);
			})
			.catch((err) => console.log(err));
	}

	public async DeleteUserById(req: Request, res: Response) {
		await this.userController
			.DeleteUserById(req.params.id)
			.then((response) => {
				console.log(response);
				res.sendStatus(200);
			})
			.catch((err) => console.log(err));
	}
}

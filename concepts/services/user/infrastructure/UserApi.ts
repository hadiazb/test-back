import { Request, Response } from 'express';
import { Service } from 'typedi';

// Ours
import { Sockets } from '../../../sockets/socket';
import { UserController } from '../interfaceAdapters/UserController';

@Service()
export default class UserApi {
	constructor(private readonly userController: UserController) {}

	public async GetUsers(req: Request, res: Response) {
		await this.userController
			.GetUsers()
			.then((response) => {
				// res.send(response);
				res.status(200).send({
					status: 200,
					users: response,
				});
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send({
					error: err,
					status: 500,
				});
			});
	}

	public async GetUserBySexo(req: Request, res: Response) {
		await this.userController
			.GetUsersBySex()
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

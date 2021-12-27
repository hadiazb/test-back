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
				res.status(200).send({
					status: 200,
					users: response,
				});
			})
			.catch((err) => {
				res.status(500).send({
					error: err,
					status: 500,
				});
			});
	}

	public async GetUserById(req: Request, res: Response) {
		await this.userController
			.GetUserById(req.params.id)
			.then((response) => {
				res.status(200).send({
					status: 200,
					user: response,
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

	public async DeleteUserById(req: Request, res: Response) {
		await this.userController
			.DeleteUserById(req.params.id)
			.then((response) => {
				const isUser = response;
				if (isUser) {
					res.status(200).send({
						status: 200,
						user: `El usuario con ID igual a ${req.params.id} fue eliminado`,
					});
				} else {
					res.status(200).send({
						status: 200,
						user: `El usuario con ID igual a ${req.params.id} no existe`,
					});
				}
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send({
					error: err,
					status: 500,
				});
			});
	}

	public async CreateUser(req: Request, res: Response) {
		await this.userController
			.CreateUser(req.body)
			.then((response) => {
				Sockets.emmit('create-user', response);
				res.status(200).send({
					status: 200,
					user: response,
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

	public async UpdateUserById(req: Request, res: Response) {
		await this.userController
			.UpdateUserById(req.params.id, req.body)
			.then((response) => {
				const isUser = response[0];
				if (isUser) {
					res.status(200).send({
						status: 200,
						user: `El usuario con ID igual a ${req.params.id} fue actualizado`,
					});
				} else {
					res.status(200).send({
						status: 200,
						user: `El usuario con ID igual a ${req.params.id} no existe`,
					});
				}
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send({
					error: err,
					status: 500,
				});
			});
	}
}

import { Request, Response } from 'express';
import { Service } from 'typedi';

// Ours
import { Sockets } from '../../../sockets/socket';
import { Redis } from '../../../storage/redis';
import { UserController } from '../interfaceAdapters/UserController';

@Service()
export default class UserApi {
	constructor(
		private readonly userController: UserController,
		private redis: Redis
	) {}

	public async GetUsers(req: Request, res: Response) {
		let flag = await this.redis.ReadData('users');

		await this.userController
			.GetUsers()
			.then((response) => {
				if (flag) {
					if (flag === JSON.stringify(response)) {
						console.log('========>          COMSUMO DE REDIS');
						res.send(JSON.parse(flag));
					} else {
						console.log('========>          ACTUALIZACIÓN DE REDIS');
						this.redis.WriteData('users', JSON.stringify(response));
						console.log('========>          CONSUMO DEL SERVICIO');
						res.send(response);
					}
				} else {
					console.log('========>          ACTUALIZACIÓN DE REDIS');
					this.redis.WriteData('users', JSON.stringify(response));
					console.log('========>          CONSUMO DEL SERVICIO, REDIS VACIO');
					res.send(response);
				}
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

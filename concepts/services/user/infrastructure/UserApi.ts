import { Request, Response } from 'express';
import { Service } from 'typedi';

// Ours
import { Sockets } from '../../../sockets/socket';
import { Redis } from '../../../storage/redis';
import User from '../../../store/models/User';
import { UserController } from '../interfaceAdapters/UserController';

@Service()
export default class UserApi {
	constructor(
		private readonly userController: UserController,
		private redis: Redis
	) {}

	public async GetUsers(req: Request, res: Response) {
    let flat: User[] = JSON.parse((await this.redis.ReadData('users'))!);
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX',flat);
    if (!flat || !flat.length) {
      console.log('bases de datos')
      await this.userController
        .GetUsers()
        .then((response) => {
          console.log('==========>',response)
          flat = response;
          this.redis.WriteData('users', JSON.stringify(flat))
        })
        .catch((err) => console.log(err));
    }
      console.log('redis cache')
      return res.send(flat);
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

import { Service } from 'typedi';
import { UserRetriever } from '../application/implementation/UserRetriever';
import { IUserController } from './IUserController';

import { Users, UsersAttributes } from '../../../models/init-models';
@Service()
export class UserController implements IUserController {
	constructor(private readonly userRetriever: UserRetriever) {}

	public async GetUsers(): Promise<Users[]> {
		return await this.userRetriever.GetUsers();
	}

	public async GetUserById(id: string): Promise<Users | null> {
		return await this.userRetriever.GetUserById(id);
	}

	public async DeleteUserById(id: string): Promise<number> {
		return await this.userRetriever.DeleteUserById(id);
	}

	public async CreateUser(body: UsersAttributes): Promise<Users> {
		return await this.userRetriever.CreateUser(body);
	}

	public async UpdateUserById(
		id: string,
		body: UsersAttributes
	): Promise<[number, Users[]]> {
		return await this.userRetriever.UpdateUserById(id, body);
	}
}

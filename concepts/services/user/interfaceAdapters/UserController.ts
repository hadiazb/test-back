import { Service } from 'typedi';
import { UserRetriever } from '../application/implementation/UserRetriever';
import { IUserController } from './IUserController';

import User from '../../../store/models/User';
import { UserInterface } from '../../../store/modelsInterfaces/UserInterfaces';
@Service()
export class UserController implements IUserController {
	constructor(private readonly userRetriever: UserRetriever) {}

	public async GetUsersBySex(): Promise<User[]> {
		return await this.userRetriever.GetUsersBySex();
	}

	public async GetUsers(): Promise<User[]> {
		return await this.userRetriever.GetUsers();
	}

	public async GetUserById(id: string): Promise<User | null> {
		return await this.userRetriever.GetUserById(id);
	}

	public async CreateUser(body: UserInterface): Promise<User> {
		return await this.userRetriever.CreateUser(body);
	}

	public async UpdateUserById(
		id: string,
		body: UserInterface
	): Promise<[number, User[]]> {
		return await this.userRetriever.UpdateUserById(id, body);
	}

	public async DeleteUserById(id: string): Promise<number> {
		return await this.userRetriever.DeleteUserById(id);
	}
}

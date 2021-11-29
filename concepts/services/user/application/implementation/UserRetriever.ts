import { Service } from 'typedi';
import { UserContext } from '../../domain/UserContext';
import { IUserRetriever } from '../interface/IUserRetriever';

import User from '../../../../store/models/User';
import { UserInterface } from '../../../../store/modelsInterfaces/UserInterfaces';

@Service()
export class UserRetriever implements IUserRetriever {
	constructor(private readonly userContext: UserContext) {}

	public async GetUsers(): Promise<User[]> {
		return await this.userContext.GetUsers();
	}

	public async GetUserById(id: string): Promise<User[]> {
		return await this.userContext.GetUserById(id);
	}

	public async CreateUser(body: UserInterface): Promise<User> {
		return await this.userContext.CreateUser(body);
	}

	public async UpdateUserById(
		id: string,
		body: UserInterface
	): Promise<[number, User[]]> {
		return await this.userContext.UpdateUserById(id, body);
	}

	public async DeleteUserById(id: string): Promise<number> {
		return await this.userContext.DeleteUserById(id);
	}
}

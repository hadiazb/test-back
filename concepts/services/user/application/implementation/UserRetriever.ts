import { Service } from 'typedi';
import { UserContext } from '../../domain/UserContext';
import { IUserRetriever } from '../interface/IUserRetriever';

import User from '../../../../store/models/User';
import { UserInterface } from '../../../../store/modelsInterfaces/UserInterfaces';
import { UserPostgreSQLRepository } from '../../infrastructure/repositories/UserPostgreSQLRepository';

@Service()
export class UserRetriever implements IUserRetriever {
	constructor(
		private readonly userContext: UserContext,
		private readonly userPostgreSQL: UserPostgreSQLRepository
	) {}

	public async GetUsers(): Promise<User[]> {
		return await this.userPostgreSQL.GetUsers();
	}

	public async GetUsersBySex(): Promise<User[]> {
		const users = await this.userPostgreSQL.GetUsers();
		const sexo = false;
		return await this.userContext.GetUsersBySex(users, sexo);
	}

	public async GetUserById(id: string): Promise<User | null> {
		return await this.userPostgreSQL.GetUserById(id);
	}

	public async CreateUser(body: UserInterface): Promise<User> {
		return await this.userPostgreSQL.CreateUser(body);
	}

	public async UpdateUserById(
		id: string,
		body: UserInterface
	): Promise<[number, User[]]> {
		return await this.userPostgreSQL.UpdateUser(id, body);
	}

	public async DeleteUserById(id: string): Promise<number> {
		return await this.userPostgreSQL.DeleteUser(id);
	}
}

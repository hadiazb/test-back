import { Service } from 'typedi';
import { UserContext } from '../../domain/UserContext';
import { IUserRetriever } from '../interface/IUserRetriever';

import { Users, UsersAttributes } from '../../../../models/init-models';
import { UserPostgreSQLRepository } from '../../infrastructure/repositories/UserPostgreSQLRepository';

@Service()
export class UserRetriever implements IUserRetriever {
	constructor(
		private readonly userContext: UserContext,
		private readonly userPostgreSQL: UserPostgreSQLRepository
	) {}

	public async GetUsers(): Promise<Users[]> {
		return await this.userPostgreSQL.GetUsers();
	}

	public async GetUserById(id: string): Promise<Users | null> {
		return await this.userPostgreSQL.GetUserById(id);
	}

	public async DeleteUserById(id: string): Promise<number> {
		return await this.userPostgreSQL.DeleteUser(id);
	}

	public async CreateUser(body: UsersAttributes): Promise<Users> {
		return await this.userPostgreSQL.CreateUser(body);
	}

	public async UpdateUserById(
		id: string,
		body: UsersAttributes
	): Promise<[number, Users[]]> {
		return await this.userPostgreSQL.UpdateUser(id, body);
	}
}

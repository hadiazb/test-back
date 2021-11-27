import { IUserRepository } from './IUserRepository';
import User from './UserModel';

export class UserPostgreSQLRepository implements IUserRepository {
	public async GetUsers(): Promise<any> {
		return User.findAll();
	}

	public async GetUserById(): Promise<any> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}

	public async CreateUser(): Promise<any> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}

	public async UpdateUser(): Promise<any> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}

	public async DeleteUser(): Promise<any> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}
}

import { IUserRepository } from './IUserRepository';

export class UserMySQLRepository implements IUserRepository {
	public async GetUsers(): Promise<void> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}

	public async GetUserById(): Promise<void> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}

	public async CreateUser(): Promise<void> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}

	public async UpdateUser(): Promise<void> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}

	public async DeleteUser(): Promise<void> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}
}

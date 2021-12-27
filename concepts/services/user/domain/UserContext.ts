import { Service } from 'typedi';
import { Users, UsersAttributes } from '../../../models/init-models';
import { IUserContext } from './IUserContext';

@Service()
export class UserContext implements IUserContext {
	public UpdateUserById(
		id: string,
		body: UsersAttributes
	): Promise<[number, Users[]]> {
		throw new Error('Method not implemented.');
	}
	public async GetUsers(): Promise<Users[]> {
		throw new Error('Method not implemented.');
	}
	public async GetUserById(id: string): Promise<Users | null> {
		throw new Error('Method not implemented.');
	}
	public DeleteUserById(id: string): Promise<number> {
		throw new Error('Method not implemented.');
	}
	public CreateUser(body: UsersAttributes): Promise<Users> {
		throw new Error('Method not implemented.');
	}
}

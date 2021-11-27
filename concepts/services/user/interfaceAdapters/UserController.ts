import { Service } from 'typedi';
import { UserRetriever } from '../application/implementation/UserRetriever';
import { IUserController } from './IUserController';

import User from '../../../store/models/User';

@Service()
export class UserController implements IUserController {
	constructor(private readonly userRetriever: UserRetriever) {}

	public async GetUsers(): Promise<User[]> {
		return await this.userRetriever.GetUsers();
	}
}

import { Service } from 'typedi';
import User from '../../../store/models/User';

@Service()
export class UserContext {
	public async GetUsers(): Promise<User[]> {
		return User.findAll();
	}
}

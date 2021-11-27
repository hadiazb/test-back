import User from '../../../store/models/User';

export interface IUserController {
	GetUsers(): Promise<User[]>;
}

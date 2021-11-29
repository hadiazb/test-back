import User from '../../../../store/models/User';

export interface IUserRetriever {
	GetUsers(): Promise<User[]>;
	GetUserById(id: string): Promise<User[]>;
}

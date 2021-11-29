import User from '../../../../store/models/User';
import { UserInterface } from '../../../../store/modelsInterfaces/UserInterfaces';

export interface IUserRetriever {
	GetUsers(): Promise<User[]>;
	GetUserById(id: string): Promise<User[]>;
	CreateUser(body: UserInterface): Promise<User>;
	UpdateUserById(id: string, body: UserInterface): Promise<[number, User[]]>;
	DeleteUserById(id: string): Promise<number>;
}

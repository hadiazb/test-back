import User from '../../../../store/models/User';
import { UserInterface } from '../../../../store/modelsInterfaces/UserInterfaces';

export interface IUserRetriever {
	GetUsers(): Promise<User[]>;
	GetUsersBySex(): Promise<User[]>;
	GetUserById(id: string): Promise<User | null>;
	CreateUser(body: UserInterface): Promise<User>;
	UpdateUserById(id: string, body: UserInterface): Promise<[number, User[]]>;
	DeleteUserById(id: string): Promise<number>;
}

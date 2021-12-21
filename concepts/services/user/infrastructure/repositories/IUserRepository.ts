import User from '../../../../store/models/User';
import { UserInterface } from '../../../../store/modelsInterfaces/UserInterfaces';

export interface IUserRepository {
	GetUsers(): Promise<User[]>;
	GetUserById(id: string): Promise<User | null>;
	CreateUser(body: UserInterface): Promise<User>;
	DeleteUser(id: string): Promise<number>;
	UpdateUser(id: string, body: UserInterface): Promise<[number, User[]]>;
}

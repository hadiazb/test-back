import { Users, UsersAttributes } from '../../../models/init-models';

export interface IUserController {
	GetUsers(): Promise<Users[]>;
	GetUserById(id: string): Promise<Users | null>;
	DeleteUserById(id: string): Promise<number>;
	CreateUser(body: UsersAttributes): Promise<Users>;
	UpdateUserById(id: string, body: UsersAttributes): Promise<[number, Users[]]>;
}

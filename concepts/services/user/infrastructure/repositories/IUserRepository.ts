import { Users, UsersAttributes } from '../../../../models/init-models';

export interface IUserRepository {
	GetUsers(): Promise<Users[]>;
	GetUserById(id: string): Promise<Users | null>;
	DeleteUser(id: string): Promise<number>;
	CreateUser(body: UsersAttributes): Promise<Users>;
	UpdateUser(id: string, body: UsersAttributes): Promise<[number, Users[]]>;
}

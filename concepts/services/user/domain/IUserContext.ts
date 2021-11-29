import User from '../../../store/models/User';

export interface IUserContext {
	GetUsers(): Promise<User[]>;
	GetUserById(id: string): Promise<User[]>;
	CreateUser(): Promise<void>;
	DeleteUser(): Promise<void>;
	UpdateUser(): Promise<void>;
}

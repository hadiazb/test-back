import User from '../../../store/models/User';

export interface IUserContext {
	GetUsers(): Promise<User[]>;
	GetUserById(): Promise<void>;
	CreateUser(): Promise<void>;
	DeleteUser(): Promise<void>;
	UpdateUser(): Promise<void>;
}

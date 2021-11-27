export interface IUserRepository {
	GetUsers(): Promise<void | any>;
	GetUserById(): Promise<void | any>;
	CreateUser(): Promise<void | any>;
	DeleteUser(): Promise<void | any>;
	UpdateUser(): Promise<void | any>;
}

import User from '../../../store/models/User';

export interface IUserController {
	GetUsers(): Promise<User[]>;
	GetUserById(id: string): Promise<User | null>;
	CreateUser(body: UserInterface): Promise<User>;
	UpdateUserById(id: string, body: UserInterface): Promise<[number, User[]]>;
	DeleteUserById(id: string): Promise<number>;
}

interface UserInterface {
	id?: number;
	nombre: string;
	apellido: string;
	edad: number;
	sexo: boolean;
}

import { Service } from 'typedi';
import { UserRetriever } from '../application/implementation/UserRetriever';
import { IUserController } from './IUserController';

import User from '../../../store/models/User';

@Service()
export class UserController implements IUserController {
	constructor(private readonly userRetriever: UserRetriever) {}

	public async GetUsers(): Promise<User[]> {
		return await this.userRetriever.GetUsers();
	}

	public async GetUserById(id: string): Promise<User[]> {
		return await this.userRetriever.GetUserById(id);
	}

	public async CreateUser(body: UserInterface): Promise<User> {
		return await this.userRetriever.CreateUser(body);
	}
}

interface UserInterface {
	id?: number;
	nombre: string;
	apellido: string;
	edad: number;
	sexo: boolean;
}

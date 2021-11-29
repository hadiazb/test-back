import { Service } from 'typedi';
import { UserContext } from '../../domain/UserContext';
import { IUserRetriever } from '../interface/IUserRetriever';
import User from '../../../../store/models/User';

@Service()
export class UserRetriever implements IUserRetriever {
	constructor(private readonly userContext: UserContext) {}

	public async GetUsers(): Promise<User[]> {
		return await this.userContext.GetUsers();
	}

	public async GetUserById(id: string): Promise<User[]> {
		return await this.userContext.GetUserById(id);
	}

	public async CreateUser(body: UserInterface): Promise<User> {
		return await this.userContext.CreateUser(body);
	}
}

interface UserInterface {
	id?: number;
	nombre: string;
	apellido: string;
	edad: number;
	sexo: boolean;
}

import { Service } from 'typedi';
import User from '../../../store/models/User';

@Service()
export class UserContext {
	public async GetUsers(): Promise<User[]> {
		return User.findAll();
	}

	public async GetUserById(id: string): Promise<User[]> {
		return User.findAll({
			where: {
				id,
			},
		});
	}

	public async CreateUser(body: UserInterface): Promise<User> {
		return User.create({
			nombre: body.nombre,
			apellido: body.apellido,
			edad: body.edad,
			sexo: body.sexo,
		});
	}
}

interface UserInterface {
	id?: number;
	nombre: string;
	apellido: string;
	edad: number;
	sexo: boolean;
}

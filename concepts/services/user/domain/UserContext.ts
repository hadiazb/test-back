import { Service } from 'typedi';
import { IUserContext } from './IUserContext';

import User from '../../../store/models/User';
import { UserInterface } from '../../../store/modelsInterfaces/UserInterfaces';

@Service()
export class UserContext implements IUserContext {
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

	public async UpdateUserById(
		id: string,
		body: UserInterface
	): Promise<[number, User[]]> {
		return User.update(
			{
				id: body.id,
				nombre: body.nombre,
				apellido: body.apellido,
				edad: body.edad,
				sexo: body.sexo,
			},
			{
				where: {
					id,
				},
			}
		);
	}

	public async DeleteUserById(id: string): Promise<number> {
		return User.destroy({
			where: {
				id,
			},
		});
	}
}

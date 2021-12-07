import { IUserRepository } from './IUserRepository';
import { Service } from 'typedi';

import User from '../../../../store/models/User';
import { UserInterface } from '../../../../store/modelsInterfaces/UserInterfaces';

@Service()
export class UserPostgreSQLRepository implements IUserRepository {
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

	public async UpdateUser(
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

	public async DeleteUser(id: string): Promise<number> {
		return User.destroy({
			where: {
				id,
			},
		});
	}
}

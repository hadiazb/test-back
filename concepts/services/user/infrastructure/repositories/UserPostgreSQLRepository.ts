import { IUserRepository } from './IUserRepository';
import { Service } from 'typedi';

import User from '../../../../store/models/User';
import { UserInterface } from '../../../../store/modelsInterfaces/UserInterfaces';
import { RedisRepository } from '../../../../redis/redis';

@Service()
export class UserPostgreSQLRepository implements IUserRepository {
	public user: string = 'users';
	constructor(private readonly redisRepository: RedisRepository) {}

	public async GetUsers(): Promise<User[]> {
		const response = await User.findAll();
		let flag = await this.redisRepository.ReadData(this.user);

		if (flag) {
			if (flag === JSON.stringify(response)) {
				return JSON.parse(flag);
			} else {
				this.redisRepository.WriteData(this.user, JSON.stringify(response));

				return User.findAll();
			}
		} else {
			this.redisRepository.WriteData(this.user, JSON.stringify(response));

			return User.findAll();
		}
	}

	public async GetUserById(id: string): Promise<User | null> {
		return User.findByPk(id);
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

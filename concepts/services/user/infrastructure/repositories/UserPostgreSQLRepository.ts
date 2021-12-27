import { IUserRepository } from './IUserRepository';
import { Service } from 'typedi';

import { Users, UsersAttributes } from '../../../../models/init-models';
import { RedisRepository } from '../../../../redis/redis';

@Service()
export class UserPostgreSQLRepository implements IUserRepository {
	public user: string = 'users';
	constructor(private readonly redisRepository: RedisRepository) {}

	public async GetUsers(): Promise<Users[]> {
		const response = await Users.findAll();
		let flag = await this.redisRepository.ReadData(this.user);

		if (flag) {
			if (flag === JSON.stringify(response)) {
				return JSON.parse(flag);
			} else {
				this.redisRepository.WriteData(this.user, JSON.stringify(response));

				return Users.findAll();
			}
		} else {
			this.redisRepository.WriteData(this.user, JSON.stringify(response));

			return Users.findAll();
		}
	}

	public async GetUserById(id: string): Promise<Users | null> {
		return Users.findByPk(id);
	}

	public async DeleteUser(id: string): Promise<number> {
		return Users.destroy({
			where: {
				Id: id,
			},
		});
	}

	public async CreateUser(body: UsersAttributes): Promise<Users> {
		return Users.create({
			Name: body.Name,
			LastName: body.LastName,
			Email: body.Email,
			Phone: body.Phone,
			// RegistrationDate: body.RegistrationDate,
			// ProfilePhoto: body.ProfilePhoto,
			// IsActive: body.IsActive,
			// InvitationCode: body.InvitationCode,
			// VirtualWallet: body.VirtualWallet,
			// BirthDate: body.BirthDate,
			// MarketId: body.MarketId,
			// Admin: body.Admin,
			// Address: body.Address,
			// Gender: body.Gender,
			// TypeUser: body.TypeUser,
			// LicenseValidity: body.LicenseValidity,
			// AccountNumber: body.AccountNumber,
			// Coordinator: body.Coordinator,
			// IdCity: body.IdCity,
			// haveDatafono: body.haveDatafono,
			// IdMarket: body.IdMarket,
			// Verified: body.Verified,
			// Id_Old: body.Id_Old,
			// TokenPush: body.TokenPush,
			// Longitude: body.Longitude,
			// Latitude: body.Latitude,
			// Instructions: body.Instructions,
			// Password: body.Password,
			// IsDeleted: body.IsDeleted,
		});
	}

	public async UpdateUser(
		id: string,
		body: UsersAttributes
	): Promise<[number, Users[]]> {
		return Users.update(
			{
				Name: body.Name,
				LastName: body.LastName,
				Email: body.Email,
				Phone: body.Phone,
				RegistrationDate: body.RegistrationDate,
				ProfilePhoto: body.ProfilePhoto,
				IsActive: body.IsActive,
				InvitationCode: body.InvitationCode,
				VirtualWallet: body.VirtualWallet,
				BirthDate: body.BirthDate,
				MarketId: body.MarketId,
				Admin: body.Admin,
				Address: body.Address,
				Gender: body.Gender,
				TypeUser: body.TypeUser,
				LicenseValidity: body.LicenseValidity,
				AccountNumber: body.AccountNumber,
				Coordinator: body.Coordinator,
				IdCity: body.IdCity,
				haveDatafono: body.haveDatafono,
				IdMarket: body.IdMarket,
				Verified: body.Verified,
				Id_Old: body.Id_Old,
				TokenPush: body.TokenPush,
				Longitude: body.Longitude,
				Latitude: body.Latitude,
				Instructions: body.Instructions,
				Password: body.Password,
				IsDeleted: body.IsDeleted,
			},
			{
				where: {
					Id: id,
				},
			}
		);
	}
}

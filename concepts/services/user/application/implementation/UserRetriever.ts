import { Service } from 'typedi';
import User from '../../../../store/models/User';
import { UserContext } from '../../domain/UserContext';
import { IUserRetriever } from '../interface/IUserRetriever';

// import { IUserContext } from '../../domain/IUserContext';
// import { IUserRepository } from '../../infrastructure/repositories/IUserRepository';

@Service()
export class UserRetriever implements IUserRetriever {
	constructor(private readonly userContext: UserContext) {}

	public async GetUsers(): Promise<User[]> {
		return await this.userContext.GetUsers();
		// return new Promise<string>((resolve, reject) => {
		// 	return resolve('Otra vez probando las rutas6');
		// });
	}
}

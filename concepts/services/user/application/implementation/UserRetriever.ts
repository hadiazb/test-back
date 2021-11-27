import { Service } from 'typedi';
import { UserContext } from '../../domain/UserContext';
import { IUserRetriever } from '../interface/IUserRetriever';
import User from '../../../../store/models/User';

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

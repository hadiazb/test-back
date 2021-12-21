import { Sequelize } from 'sequelize';
import { config } from '../../config/index';

export const sequelize = new Sequelize(
	config.database.dbName,
	config.database.dbUser,
	config.database.dbPassword,
	{
		host: config.database.dbHost,
		dialect: 'postgres',
		// ssl: true,
		// dialectOptions: {
		// 	ssl: {
		// 		require: true,
		// 	},
		// },
	}
);

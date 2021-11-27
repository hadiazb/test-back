import dotenv from 'dotenv';
import { Configuration } from '../interfaces/index';

dotenv.config();

export const config: Configuration = {
	app: {
		port: process.env.PORT || '3000',
		env: process.env.NODE_ENV || 'development',
	},
	database: {
		dbName: process.env.DB_NAME || '',
		dbUser: process.env.DB_USER || '',
		dbPassword: process.env.DB_PASSWORD || '',
		dbPort: process.env.DB_PORT || '',
		dbHost: process.env.DB_HOST || '',
	},
	auth: {
		secret: process.env.SECRET,
	},
};

import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import http from 'http';

// Ours
import indexRoutes from './routes/IndexRoutes';
import userRoutes from './services/user/infrastructure/UserRoutes';
import orderRouter from './services/orders/infrastructure/OrderRoutes';
import { sequelize } from './store/database';
import { config } from '../config/index';
import { Configuration } from '../interfaces/index';

export class Server {
	public configuration: Configuration;
	public server;
	public applicationContext: express.Application;

	constructor() {
		this.applicationContext = express();
		this.configuration = config;
		this.server = new http.Server(this.applicationContext);
		this.Config();
		this.Routes();
	}
	public Config() {
		this.applicationContext.set('port', this.configuration.app.port);
		this.applicationContext.use(morgan('dev'));
		this.applicationContext.use(express.json());
		this.applicationContext.use(express.urlencoded({ extended: false }));
		this.applicationContext.use(helmet());
		this.applicationContext.use(compression());
		this.applicationContext.use(cors());
	}

	public Routes() {
		this.applicationContext.use(indexRoutes);
		this.applicationContext.use('/api/user', userRoutes);
		this.applicationContext.use('/api/order', orderRouter);
	}

	public Start() {
		this.server.listen(this.applicationContext.get('port'), () => {
			console.log('Server on port', this.applicationContext.get('port'));
			this.ConnectDatabase();
		});
	}

	public ConnectDatabase() {
		sequelize
			.sync({ force: false })
			.then(() => {
				console.log('Data base is connect!!!');
			})
			.catch((error) => {
				console.log('There is a error with the data base connect', error);
			});
	}
}

const server = new Server();
server.Start();

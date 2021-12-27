import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import http from 'http';
import responseTime from 'response-time';
import socketIO, { Socket } from 'socket.io';

// Ours
// Routes
import indexRoutes from './routes/IndexRoutes';
import userRoutes from './services/user/infrastructure/UserRoutes';
// Database
import { sequelize } from './store/database';
// Configuration
import { config } from '../config/index';
import { Configuration } from '../interfaces/index';
import { initModels } from './models/init-models';
// Sockets
import { Sockets } from './sockets/socket';

export class Server {
	public configuration: Configuration;
	public server;
	public applicationContext: express.Application;
	public io: socketIO.Server;

	constructor() {
		this.applicationContext = express();
		this.configuration = config;
		this.server = new http.Server(this.applicationContext);
		this.io = new socketIO.Server(this.server, {
			cors: { origin: true, credentials: true },
		});
		this.Config();
		this.Routes();
	}
	public Config() {
		this.applicationContext.use(responseTime());
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
	}

	public Start() {
		this.server.listen(this.applicationContext.get('port'), () => {
			console.log('Server on port', this.applicationContext.get('port'));
			this.ConnectDatabase();
			this.initModels();
			this.connectSocket();
		});
	}

	public ConnectDatabase() {
		sequelize
			.authenticate()
			// .sync({ force: false })
			.then(() => {
				console.log('Data base is connect!!!');
			})
			.catch((error) => {
				console.log('There is a error with the data base connect', error);
			});
	}

	public connectSocket() {
		this.io.on('connection', (client: Socket) => {
			Sockets.socketUser(client);
		});
	}

	public initModels() {
		initModels(sequelize);
	}
}

export const server = new Server();
server.Start();

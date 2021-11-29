import { Socket } from 'socket.io';
import { server } from '../Server';

export class Sockets {
	constructor() {}

	// public connect() {
	// 	server.server.on('connection', (client) => {
	// 		console.log(client);
	// 	});
	// }

	public static socketUser(client: Socket) {
		client.on('list', (payload) => {
			console.log(payload);
		});
		client.on('lisPorID', (payload) => {
			console.log(payload);
		});
		client.on('borrar', (payload) => {
			console.log(payload);
		});
		client.on('actulizar', (payload) => {
			console.log(payload);
		});
		client.on('crear', (payload) => {
			console.log(payload);
		});
	}

	public static emmit(eventName: string, data: any) {
		server.io.emit(eventName, data);
	}
}

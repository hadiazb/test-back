import { createClient } from 'redis';
import { Service } from 'typedi';

@Service()
export class Redis {
	constructor() {
		this.ConnectRedis();
	}

	public client = createClient();

	public async ConnectRedis() {
		this.client.on('error', (err) => console.log(err));
		await this.client.connect();
		console.log('Connected to redis cache');
	}

	public async WriteData(key: string, value: string) {
		await this.client.set(key, value);
	}

	public async ReadData(key: string) {
		return await this.client.get(key);
	}
}

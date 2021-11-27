import { IOrdersRepository } from './IOrdersRepository';

export class OrdersPostgreSQLRepository implements IOrdersRepository {
	public async GetOrders(): Promise<void> {
		const query = 'SELECT * FROM User ORDER BY Id DESC';
	}
}

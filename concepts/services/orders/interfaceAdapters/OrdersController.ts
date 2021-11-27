import { Service } from 'typedi';
import { OrdersRetriever } from '../application/implementation/OrdersRetriever';
import { IOrdersController } from './IOrdersController';

import Order from '../../../store/models/Order';

@Service()
export class OrdersController implements IOrdersController {
	constructor(private readonly ordersRetriever: OrdersRetriever) {}

	public async GetOrders(): Promise<Order[]> {
		return await this.ordersRetriever.GetOrders();
	}
}

import { Service } from 'typedi';
import { OrderContext } from '../../domain/OrdersContext';
import { IOrdersRetriever } from '../interface/IOrdersRetriever';
import Order from '../../../../store/models/Order';

@Service()
export class OrdersRetriever implements IOrdersRetriever {
	constructor(private readonly ordersContext: OrderContext) {}

	public async GetOrders(): Promise<Order[]> {
		return await this.ordersContext.GetOrders();
	}
}

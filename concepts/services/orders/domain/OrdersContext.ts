import { Service } from 'typedi';
import Order from '../../../store/models/Order';

@Service()
export class OrderContext {
	public async GetOrders(): Promise<Order[]> {
		return Order.findAll();
	}
}

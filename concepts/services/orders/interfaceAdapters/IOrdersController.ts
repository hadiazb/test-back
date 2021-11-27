import Order from '../../../store/models/Order';

export interface IOrdersController {
	GetOrders(): Promise<Order[]>;
}

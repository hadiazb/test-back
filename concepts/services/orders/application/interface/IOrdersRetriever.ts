import Order from '../../../../store/models/Order';

export interface IOrdersRetriever {
	GetOrders(): Promise<Order[]>;
}

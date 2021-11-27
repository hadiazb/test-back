import { IOrdersRetriever } from '../application/interface/IOrdersRetriever';
import { IOrdersController } from './IOrdersController';

export class OrdersController implements IOrdersController {
	constructor(private readonly ordersRetriever: IOrdersRetriever) {}

	public async GetOrders(): Promise<void> {
		return await this.ordersRetriever.GetOrders();
	}
}

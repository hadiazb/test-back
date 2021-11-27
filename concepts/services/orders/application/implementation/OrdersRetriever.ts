import { IOrdersContext } from '../../domain/IOrdersContext';
import { IOrdersRepository } from '../../infrastructure/repositories/IOrdersRepository';
import { IOrdersRetriever } from '../interface/IOrdersRetriever';

export class OrdersRetriever implements IOrdersRetriever {
	constructor(
		private readonly ordersContext: IOrdersContext,
		private readonly ordersPostgreSQLRepository: IOrdersRepository,
		private readonly ordersMyQLRepository: IOrdersRepository
	) {}

	public async GetOrders(): Promise<void> {
		const allOrders = this.ordersPostgreSQLRepository.GetOrders();
		const allOrdersMysQL = this.ordersMyQLRepository.GetOrders();

		return await this.ordersContext.GetOrders();
	}
}

import { Request, Response } from 'express';
import { Service } from 'typedi';
import { OrdersController } from '../interfaceAdapters/OrdersController';

@Service()
export default class OrdersApi {
	constructor(private readonly ordersController: OrdersController) {}

	public async GetOrders(req: Request, res: Response) {
		const response = await this.ordersController.GetOrders();
		return res.json(response);
	}

	public async CreateOrder(req: Request, res: Response) {
		res.send('Create order');
	}

	public async GetOrderById(req: Request, res: Response) {
		res.send('Get order by id.');
	}

	public async UpdateOrderById(req: Request, res: Response) {
		res.send('Update order by id.');
	}

	public async DeleteOrderById(req: Request, res: Response) {
		res.send('Delete order by id.');
	}
}

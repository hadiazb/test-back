import { Request, Response } from 'express';
import { IOrdersController } from '../interfaceAdapters/IOrdersController';

export default class OrdersApi {
	constructor(private readonly ordersController: IOrdersController) {}

	public async CreateOrder(req: Request, res: Response) {
		res.send('Create order');
	}

	public async GetOrders(req: Request, res: Response) {
		res.send('Get all orders');
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

import { Router } from 'express';
import Container from 'typedi';
import OrdersApi from './OrdersApi';

class OrdersRoutes {
	constructor() {
		this.router = Router();
		this.Routes();
	}

	public router: Router;

	public Routes() {
		const orderApi = Container.get(OrdersApi);

		this.router.post('/', async (req, res) => orderApi.CreateOrder(req, res));
		this.router.get('/', async (req, res) => orderApi.GetOrders(req, res));
		this.router.get('/:id', async (req, res) =>
			orderApi.GetOrderById(req, res)
		);
		this.router.put('/:id', async (req, res) =>
			orderApi.UpdateOrderById(req, res)
		);
		this.router.delete('/:id', async (req, res) =>
			orderApi.DeleteOrderById(req, res)
		);
	}
}

const orderRouter = new OrdersRoutes();
orderRouter.Routes();

export default orderRouter.router;

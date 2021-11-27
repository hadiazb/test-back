import { Router } from 'express';
import OrdersApi from './OrdersApi';
import { IOrdersController } from '../interfaceAdapters/IOrdersController';

class OrdersRoutes extends OrdersApi {
	constructor(private controller: IOrdersController) {
		super(controller);
		this.router = Router();
		this.Routes();
	}

	public router: Router;

	public Routes() {
		this.router.post('/', this.CreateOrder);
		this.router.get('/', this.GetOrders);
		this.router.get('/:id', this.GetOrderById);
		this.router.put('/:id', this.UpdateOrderById);
		this.router.delete('/:id', this.DeleteOrderById);
	}
}

let controller!: IOrdersController;

const orderRouter = new OrdersRoutes(controller);
orderRouter.Routes();

export default orderRouter.router;

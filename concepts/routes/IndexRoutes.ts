import { Request, Response, Router } from 'express';

class IndexRoutes {
	constructor() {
		this.router = Router();
		this.Routes();
	}

	public router: Router;
	public Routes() {
		this.router.get('/', (req, res) =>
			res.send({
				baseUrl: 'http://localhost:3000/',
				user: 'http://localhost:3000/api/user',
				order: 'http://localhost:3000/api/order',
			})
		);
	}
}

const indexRouter = new IndexRoutes();
indexRouter.Routes();

export default indexRouter.router;

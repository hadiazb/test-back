import { Request, Response } from 'express';

export class response {
	constructor() {}

	public Success(req: Request, res: Response, status: number) {
		const statusCode = status || 200;
		res.status(status).send({
			error: false,
			status: statusCode,
			body: res,
		});
	}

	public error(req: Request, res: Response, status: number) {
		const statusCode = status || 500;
		res.status(status).send({
			error: false,
			status: statusCode,
			body: res,
		});
	}
}

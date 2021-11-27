"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
class response {
    constructor() { }
    Success(req, res, status) {
        const statusCode = status || 200;
        res.status(status).send({
            error: false,
            status: statusCode,
            body: res,
        });
    }
    error(req, res, status) {
        const statusCode = status || 500;
        res.status(status).send({
            error: false,
            status: statusCode,
            body: res,
        });
    }
}
exports.response = response;

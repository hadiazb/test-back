"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.Routes();
    }
    Routes() {
        this.router.get('/', (req, res) => res.send({
            baseUrl: 'http://localhost:3000/',
            user: 'http://localhost:3000/api/user',
            order: 'http://localhost:3000/api/order',
        }));
    }
}
const indexRouter = new IndexRoutes();
indexRouter.Routes();
exports.default = indexRouter.router;

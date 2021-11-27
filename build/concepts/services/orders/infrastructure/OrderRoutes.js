"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrdersApi_1 = __importDefault(require("./OrdersApi"));
class OrdersRoutes extends OrdersApi_1.default {
    constructor(controller) {
        super(controller);
        this.controller = controller;
        this.router = (0, express_1.Router)();
        this.Routes();
    }
    Routes() {
        this.router.post('/', this.CreateOrder);
        this.router.get('/', this.GetOrders);
        this.router.get('/:id', this.GetOrderById);
        this.router.put('/:id', this.UpdateOrderById);
        this.router.delete('/:id', this.DeleteOrderById);
    }
}
let controller;
const orderRouter = new OrdersRoutes(controller);
orderRouter.Routes();
exports.default = orderRouter.router;

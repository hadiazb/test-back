"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const OrdersApi_1 = __importDefault(require("./OrdersApi"));
class OrdersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.Routes();
    }
    Routes() {
        const orderApi = typedi_1.default.get(OrdersApi_1.default);
        this.router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () { return orderApi.CreateOrder(req, res); }));
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () { return orderApi.GetOrders(req, res); }));
        this.router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return orderApi.GetOrderById(req, res); }));
        this.router.put('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return orderApi.UpdateOrderById(req, res); }));
        this.router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return orderApi.DeleteOrderById(req, res); }));
    }
}
const orderRouter = new OrdersRoutes();
orderRouter.Routes();
exports.default = orderRouter.router;

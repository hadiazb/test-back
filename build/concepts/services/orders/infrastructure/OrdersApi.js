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
Object.defineProperty(exports, "__esModule", { value: true });
class OrdersApi {
    constructor(ordersController) {
        this.ordersController = ordersController;
    }
    CreateOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Create order');
        });
    }
    GetOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Get all orders');
        });
    }
    GetOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Get order by id.');
        });
    }
    UpdateOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Update order by id.');
        });
    }
    DeleteOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Delete order by id.');
        });
    }
}
exports.default = OrdersApi;

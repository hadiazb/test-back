"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const UserMySQLRepository_1 = require("./services/user/infrastructure/repositories/UserMySQLRepository");
const UserPostgreSQLRepository_1 = require("./services/user/infrastructure/repositories/UserPostgreSQLRepository");
const UserController_1 = require("./services/user/interfaceAdapters/UserController");
const UserRetriever_1 = require("./services/user/application/implementation/UserRetriever");
const UserContext_1 = require("./services/user/domain/UserContext");
const UserApi_1 = __importDefault(require("./services/user/infrastructure/UserApi"));
const OrdersMySQLRepository_1 = require("./services/orders/infrastructure/repositories/OrdersMySQLRepository");
const OrdersPostgreSQLRepository_1 = require("./services/orders/infrastructure/repositories/OrdersPostgreSQLRepository");
const OrdersController_1 = require("./services/orders/interfaceAdapters/OrdersController");
const OrdersRetriever_1 = require("./services/orders/application/implementation/OrdersRetriever");
const OrdersContext_1 = require("./services/orders/domain/OrdersContext");
const OrdersApi_1 = __importDefault(require("./services/orders/infrastructure/OrdersApi"));
exports.default = () => {
    const container = (0, awilix_1.createContainer)({
        injectionMode: 'PROXY',
    });
    container.register({
        userApi: (0, awilix_1.asClass)(UserApi_1.default).scoped(),
        userMySQLRepository: (0, awilix_1.asClass)(UserMySQLRepository_1.UserMySQLRepository).scoped(),
        userPostgreSQLRepository: (0, awilix_1.asClass)(UserPostgreSQLRepository_1.UserPostgreSQLRepository).scoped(),
        userController: (0, awilix_1.asClass)(UserController_1.UserController).scoped(),
        userRetriever: (0, awilix_1.asClass)(UserRetriever_1.UserRetriever).scoped(),
        userContext: (0, awilix_1.asClass)(UserContext_1.UserContext).scoped(),
        orderApi: (0, awilix_1.asClass)(OrdersApi_1.default).scoped(),
        orderMySQLRepository: (0, awilix_1.asClass)(OrdersMySQLRepository_1.OrdersMySQLRepository).scoped(),
        orderPostgreSQLRepository: (0, awilix_1.asClass)(OrdersPostgreSQLRepository_1.OrdersPostgreSQLRepository).scoped(),
        orderController: (0, awilix_1.asClass)(OrdersContext_1.OrderContext).scoped(),
        orderRetriever: (0, awilix_1.asClass)(OrdersRetriever_1.OrdersRetriever).scoped(),
        orderContext: (0, awilix_1.asClass)(OrdersController_1.OrdersController).scoped(),
    });
};

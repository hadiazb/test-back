import { createContainer, asClass, AwilixError, asValue } from 'awilix';
import { UserMySQLRepository } from './services/user/infrastructure/repositories/UserMySQLRepository';
import { UserPostgreSQLRepository } from './services/user/infrastructure/repositories/UserPostgreSQLRepository';
import { UserController } from './services/user/interfaceAdapters/UserController';
import { UserRetriever } from './services/user/application/implementation/UserRetriever';
import { UserContext } from './services/user/domain/UserContext';
import UserApi from './services/user/infrastructure/UserApi';

import { OrdersMySQLRepository } from './services/orders/infrastructure/repositories/OrdersMySQLRepository';
import { OrdersPostgreSQLRepository } from './services/orders/infrastructure/repositories/OrdersPostgreSQLRepository';
import { OrdersController } from './services/orders/interfaceAdapters/OrdersController';
import { OrdersRetriever } from './services/orders/application/implementation/OrdersRetriever';
import { OrderContext } from './services/orders/domain/OrdersContext';
import OrdersApi from './services/orders/infrastructure/OrdersApi';

export default () => {
	const container = createContainer({
		injectionMode: 'PROXY',
	});

	container.register({
		userApi: asClass(UserApi).scoped(),
		userMySQLRepository: asClass(UserMySQLRepository).scoped(),
		userPostgreSQLRepository: asClass(UserPostgreSQLRepository).scoped(),
		userController: asClass(UserController).scoped(),
		userRetriever: asClass(UserRetriever).scoped(),
		userContext: asClass(UserContext).scoped(),

		orderApi: asClass(OrdersApi).scoped(),
		orderMySQLRepository: asClass(OrdersMySQLRepository).scoped(),
		orderPostgreSQLRepository: asClass(OrdersPostgreSQLRepository).scoped(),
		orderController: asClass(OrderContext).scoped(),
		orderRetriever: asClass(OrdersRetriever).scoped(),
		orderContext: asClass(OrdersController).scoped(),
	});
};

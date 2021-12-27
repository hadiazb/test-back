import { createContainer, asClass, AwilixError, asValue } from 'awilix';

export default () => {
	const container = createContainer({
		injectionMode: 'PROXY',
	});

	container.register({});
};

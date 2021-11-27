import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class Order extends Model {}

Order.init(
	{
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		cantidad: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		valor: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		total: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{ sequelize, modelName: 'order' }
);

export default Order;

import { sequelize } from '../concepts/store/database';
import { DataTypes, Model } from 'sequelize';

export interface ordersAttributes {
	id: number;
	nombre: string;
	cantidad: number;
	valor: number;
	total: number;
	createdAt: Date;
	updatedAt: Date;
}

// export type ordersPk = "id";
// export type ordersId = orders[ordersPk];
// export type ordersOptionalAttributes = "id";
// export type ordersCreationAttributes = Optional<ordersAttributes, ordersOptionalAttributes>;

export default class Order extends Model {
	id!: number;
	nombre!: string;
	cantidad!: number;
	valor!: number;
	total!: number;
	// createdAt!: Date;
	// updatedAt!: Date;
}

Order.init(
	{
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		nombre: {
			type: DataTypes.STRING(255),
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
	{
		sequelize,
		tableName: 'orders',
		schema: 'public',
		timestamps: true,
		indexes: [
			{
				name: 'orders_pkey',
				unique: true,
				fields: [{ name: 'id' }],
			},
		],
	}
);

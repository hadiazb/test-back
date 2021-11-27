import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../../../store/database';

export default class User extends Model {}
User.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
		},
	},
	{ sequelize, modelName: 'user' }
);

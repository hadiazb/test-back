import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class User extends Model {}

User.init(
	{
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		apellido: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		edad: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		sexo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{ sequelize, modelName: 'user' }
);

export default User;

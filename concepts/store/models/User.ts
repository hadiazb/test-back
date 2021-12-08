// import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

// class User extends Model {}

// User.init(
// 	{
// 		nombre: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 		apellido: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 		edad: {
// 			type: DataTypes.INTEGER,
// 			allowNull: false,
// 		},
// 		sexo: {
// 			type: DataTypes.BOOLEAN,
// 			allowNull: false,
// 		},
// 	},
// 	{ sequelize, modelName: 'user' }
// );

// export default User;

import { DataTypes, Model } from 'sequelize';

export interface usersAttributes {
	id: number;
	nombre: string;
	apellido: string;
	edad: number;
	sexo: boolean;
	createdAt: Date;
	updatedAt: Date;
}

// export type usersPk = "id";
// export type usersId = users[usersPk];
// export type usersOptionalAttributes = "id";
// export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export default class User extends Model {
	id!: number;
	nombre!: string;
	apellido!: string;
	edad!: number;
	sexo!: boolean;
	// createdAt!: Date;
	// updatedAt!: Date;
}

User.init(
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
		apellido: {
			type: DataTypes.STRING(255),
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
	{
		sequelize,
		tableName: 'users',
		schema: 'public',
		timestamps: true,
		indexes: [
			{
				name: 'users_pkey',
				unique: true,
				fields: [{ name: 'id' }],
			},
		],
	}
);

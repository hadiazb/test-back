import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../concepts/store/database';

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

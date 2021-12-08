"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Model, DataTypes } from 'sequelize';
const database_1 = require("../database");
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
const sequelize_1 = require("sequelize");
// export type usersPk = "id";
// export type usersId = users[usersPk];
// export type usersOptionalAttributes = "id";
// export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;
class User extends sequelize_1.Model {
}
exports.default = User;
User.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    sexo: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
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
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class User extends sequelize_1.Model {
}
User.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
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
}, { sequelize: database_1.sequelize, modelName: 'user' });
exports.default = User;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../../config/index");
exports.sequelize = new sequelize_1.Sequelize(index_1.config.database.dbName, index_1.config.database.dbUser, index_1.config.database.dbPassword, {
    host: index_1.config.database.dbHost,
    dialect: 'postgres',
});

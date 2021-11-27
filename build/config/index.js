"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    app: {
        port: process.env.PORT || '3000',
        env: process.env.NODE_ENV || 'development',
    },
    database: {
        dbName: process.env.DB_NAME || '',
        dbUser: process.env.DB_USER || '',
        dbPassword: process.env.DB_PASSWORD || '',
        dbPort: process.env.DB_PORT || '',
        dbHost: process.env.DB_HOST || '',
    },
    auth: {
        secret: process.env.SECRET,
    },
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const UserApi_1 = __importDefault(require("./UserApi"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.Routes();
    }
    Routes() {
        const userApi = typedi_1.default.get(UserApi_1.default);
        this.router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () { return userApi.CreateUser(req, res); }));
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () { return userApi.GetUsers(req, res); }));
        this.router.get('/sexo', (req, res) => __awaiter(this, void 0, void 0, function* () { return userApi.GetUserBySexo(req, res); }));
        this.router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return userApi.GetUserById(req, res); }));
        this.router.put('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return userApi.UpdateUserById(req, res); }));
        this.router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () { return userApi.DeleteUserById(req, res); }));
    }
}
const userRouter = new UserRoutes();
userRouter.Routes();
exports.default = userRouter.router;

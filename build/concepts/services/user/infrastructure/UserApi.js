"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
// Ours
const socket_1 = require("../../../sockets/socket");
const UserController_1 = require("../interfaceAdapters/UserController");
let UserApi = class UserApi {
    constructor(userController) {
        this.userController = userController;
    }
    GetUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userController
                .GetUsers()
                .then((response) => {
                res.status(200).send({
                    status: 200,
                    users: response,
                });
            })
                .catch((err) => {
                res.status(500).send({
                    error: err,
                    status: 500,
                });
            });
        });
    }
    GetUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userController
                .GetUserById(req.params.id)
                .then((response) => {
                res.status(200).send({
                    status: 200,
                    user: response,
                });
            })
                .catch((err) => {
                console.log(err);
                res.status(500).send({
                    error: err,
                    status: 500,
                });
            });
        });
    }
    DeleteUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userController
                .DeleteUserById(req.params.id)
                .then((response) => {
                const isUser = response;
                if (isUser) {
                    res.status(200).send({
                        status: 200,
                        user: `El usuario con ID igual a ${req.params.id} fue eliminado`,
                    });
                }
                else {
                    res.status(200).send({
                        status: 200,
                        user: `El usuario con ID igual a ${req.params.id} no existe`,
                    });
                }
            })
                .catch((err) => {
                console.log(err);
                res.status(500).send({
                    error: err,
                    status: 500,
                });
            });
        });
    }
    CreateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userController
                .CreateUser(req.body)
                .then((response) => {
                socket_1.Sockets.emmit('create-user', response);
                res.status(200).send({
                    status: 200,
                    user: response,
                });
            })
                .catch((err) => {
                console.log(err);
                res.status(500).send({
                    error: err,
                    status: 500,
                });
            });
        });
    }
    UpdateUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userController
                .UpdateUserById(req.params.id, req.body)
                .then((response) => {
                const isUser = response[0];
                if (isUser) {
                    res.status(200).send({
                        status: 200,
                        user: `El usuario con ID igual a ${req.params.id} fue actualizado`,
                    });
                }
                else {
                    res.status(200).send({
                        status: 200,
                        user: `El usuario con ID igual a ${req.params.id} no existe`,
                    });
                }
            })
                .catch((err) => {
                console.log(err);
                res.status(500).send({
                    error: err,
                    status: 500,
                });
            });
        });
    }
};
UserApi = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [UserController_1.UserController])
], UserApi);
exports.default = UserApi;

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
exports.UserRetriever = void 0;
const typedi_1 = require("typedi");
const UserContext_1 = require("../../domain/UserContext");
const UserPostgreSQLRepository_1 = require("../../infrastructure/repositories/UserPostgreSQLRepository");
let UserRetriever = class UserRetriever {
    constructor(userContext, userPostgreSQL) {
        this.userContext = userContext;
        this.userPostgreSQL = userPostgreSQL;
    }
    // GetAllUsers in data base and connected to domain layer
    GetUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userPostgreSQL.GetUsers();
        });
    }
    // GetAllUsers by sexo, this service not connected to domain layer
    GetUsersBySex() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userPostgreSQL.GetUsers();
            const sexo = false;
            return yield this.userContext.GetUsersBySex(users, sexo);
        });
    }
    GetUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userPostgreSQL.GetUserById(id);
        });
    }
    CreateUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userPostgreSQL.CreateUser(body);
        });
    }
    UpdateUserById(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userPostgreSQL.UpdateUser(id, body);
        });
    }
    DeleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userPostgreSQL.DeleteUser(id);
        });
    }
};
UserRetriever = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [UserContext_1.UserContext,
        UserPostgreSQLRepository_1.UserPostgreSQLRepository])
], UserRetriever);
exports.UserRetriever = UserRetriever;

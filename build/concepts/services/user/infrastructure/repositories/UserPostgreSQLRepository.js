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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPostgreSQLRepository = void 0;
const typedi_1 = require("typedi");
const User_1 = __importDefault(require("../../../../store/models/User"));
const redis_1 = require("../../../../redis/redis");
let UserPostgreSQLRepository = class UserPostgreSQLRepository {
    constructor(redisRepository) {
        this.redisRepository = redisRepository;
        this.user = 'users';
    }
    GetUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield User_1.default.findAll();
            let flag = yield this.redisRepository.ReadData(this.user);
            if (flag) {
                if (flag === JSON.stringify(response)) {
                    return JSON.parse(flag);
                }
                else {
                    this.redisRepository.WriteData(this.user, JSON.stringify(response));
                    return User_1.default.findAll();
                }
            }
            else {
                this.redisRepository.WriteData(this.user, JSON.stringify(response));
                return User_1.default.findAll();
            }
        });
    }
    GetUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_1.default.findByPk(id);
        });
    }
    CreateUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_1.default.create({
                nombre: body.nombre,
                apellido: body.apellido,
                edad: body.edad,
                sexo: body.sexo,
            });
        });
    }
    UpdateUser(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_1.default.update({
                nombre: body.nombre,
                apellido: body.apellido,
                edad: body.edad,
                sexo: body.sexo,
            }, {
                where: {
                    id,
                },
            });
        });
    }
    DeleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_1.default.destroy({
                where: {
                    id,
                },
            });
        });
    }
};
UserPostgreSQLRepository = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [redis_1.RedisRepository])
], UserPostgreSQLRepository);
exports.UserPostgreSQLRepository = UserPostgreSQLRepository;

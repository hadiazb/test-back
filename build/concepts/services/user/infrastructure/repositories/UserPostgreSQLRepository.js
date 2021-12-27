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
exports.UserPostgreSQLRepository = void 0;
const typedi_1 = require("typedi");
const init_models_1 = require("../../../../models/init-models");
const redis_1 = require("../../../../redis/redis");
let UserPostgreSQLRepository = class UserPostgreSQLRepository {
    constructor(redisRepository) {
        this.redisRepository = redisRepository;
        this.user = 'users';
    }
    GetUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield init_models_1.Users.findAll();
            let flag = yield this.redisRepository.ReadData(this.user);
            if (flag) {
                if (flag === JSON.stringify(response)) {
                    return JSON.parse(flag);
                }
                else {
                    this.redisRepository.WriteData(this.user, JSON.stringify(response));
                    return init_models_1.Users.findAll();
                }
            }
            else {
                this.redisRepository.WriteData(this.user, JSON.stringify(response));
                return init_models_1.Users.findAll();
            }
        });
    }
    GetUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return init_models_1.Users.findByPk(id);
        });
    }
    DeleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return init_models_1.Users.destroy({
                where: {
                    Id: id,
                },
            });
        });
    }
    CreateUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return init_models_1.Users.create({
                Name: body.Name,
                LastName: body.LastName,
                Email: body.Email,
                Phone: body.Phone,
                // RegistrationDate: body.RegistrationDate,
                // ProfilePhoto: body.ProfilePhoto,
                // IsActive: body.IsActive,
                // InvitationCode: body.InvitationCode,
                // VirtualWallet: body.VirtualWallet,
                // BirthDate: body.BirthDate,
                // MarketId: body.MarketId,
                // Admin: body.Admin,
                // Address: body.Address,
                // Gender: body.Gender,
                // TypeUser: body.TypeUser,
                // LicenseValidity: body.LicenseValidity,
                // AccountNumber: body.AccountNumber,
                // Coordinator: body.Coordinator,
                // IdCity: body.IdCity,
                // haveDatafono: body.haveDatafono,
                // IdMarket: body.IdMarket,
                // Verified: body.Verified,
                // Id_Old: body.Id_Old,
                // TokenPush: body.TokenPush,
                // Longitude: body.Longitude,
                // Latitude: body.Latitude,
                // Instructions: body.Instructions,
                // Password: body.Password,
                // IsDeleted: body.IsDeleted,
            });
        });
    }
    UpdateUser(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return init_models_1.Users.update({
                Name: body.Name,
                LastName: body.LastName,
                Email: body.Email,
                Phone: body.Phone,
                RegistrationDate: body.RegistrationDate,
                ProfilePhoto: body.ProfilePhoto,
                IsActive: body.IsActive,
                InvitationCode: body.InvitationCode,
                VirtualWallet: body.VirtualWallet,
                BirthDate: body.BirthDate,
                MarketId: body.MarketId,
                Admin: body.Admin,
                Address: body.Address,
                Gender: body.Gender,
                TypeUser: body.TypeUser,
                LicenseValidity: body.LicenseValidity,
                AccountNumber: body.AccountNumber,
                Coordinator: body.Coordinator,
                IdCity: body.IdCity,
                haveDatafono: body.haveDatafono,
                IdMarket: body.IdMarket,
                Verified: body.Verified,
                Id_Old: body.Id_Old,
                TokenPush: body.TokenPush,
                Longitude: body.Longitude,
                Latitude: body.Latitude,
                Instructions: body.Instructions,
                Password: body.Password,
                IsDeleted: body.IsDeleted,
            }, {
                where: {
                    Id: id,
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

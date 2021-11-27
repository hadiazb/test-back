"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
// Ours
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const UserRoutes_1 = __importDefault(require("./services/user/infrastructure/UserRoutes"));
const database_1 = require("./store/database");
const index_1 = require("../config/index");
class Server {
    constructor() {
        this.applicationContext = (0, express_1.default)();
        this.configuration = index_1.config;
        // this.server = new http.Server(this.applicationContext);
        this.Config();
        this.Routes();
    }
    Config() {
        this.applicationContext.set('port', this.configuration.app.port);
        this.applicationContext.use((0, morgan_1.default)('dev'));
        this.applicationContext.use(express_1.default.json());
        this.applicationContext.use(express_1.default.urlencoded({ extended: false }));
        this.applicationContext.use((0, helmet_1.default)());
        this.applicationContext.use((0, compression_1.default)());
        this.applicationContext.use((0, cors_1.default)());
    }
    Routes() {
        this.applicationContext.use(IndexRoutes_1.default);
        this.applicationContext.use('/api/user', UserRoutes_1.default);
        // this.applicationContext.use('/api/order', orderRouter);
    }
    Start() {
        this.applicationContext.listen(this.applicationContext.get('port'), () => {
            console.log('Server on port', this.applicationContext.get('port'));
            this.ConnectDatabase();
        });
    }
    ConnectDatabase() {
        database_1.sequelize
            .sync({ force: false })
            .then(() => {
            console.log('Data base is connect!!!');
        })
            .catch((error) => {
            console.log('There is a error with the data base connect', error);
        });
    }
}
exports.Server = Server;
const server = new Server();
server.Start();

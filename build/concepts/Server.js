"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.Server = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const response_time_1 = __importDefault(require("response-time"));
const socket_io_1 = __importDefault(require("socket.io"));
// Ours
// Routes
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const UserRoutes_1 = __importDefault(require("./services/user/infrastructure/UserRoutes"));
// Database
const database_1 = require("./store/database");
// Configuration
const index_1 = require("../config/index");
const init_models_1 = require("./models/init-models");
// Sockets
const socket_1 = require("./sockets/socket");
class Server {
    constructor() {
        this.applicationContext = (0, express_1.default)();
        this.configuration = index_1.config;
        this.server = new http_1.default.Server(this.applicationContext);
        this.io = new socket_io_1.default.Server(this.server, {
            cors: { origin: true, credentials: true },
        });
        this.Config();
        this.Routes();
    }
    Config() {
        this.applicationContext.use((0, response_time_1.default)());
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
    }
    Start() {
        this.server.listen(this.applicationContext.get('port'), () => {
            console.log('Server on port', this.applicationContext.get('port'));
            this.ConnectDatabase();
            this.initModels();
            this.connectSocket();
        });
    }
    ConnectDatabase() {
        database_1.sequelize
            .authenticate()
            // .sync({ force: false })
            .then(() => {
            console.log('Data base is connect!!!');
        })
            .catch((error) => {
            console.log('There is a error with the data base connect', error);
        });
    }
    connectSocket() {
        this.io.on('connection', (client) => {
            socket_1.Sockets.socketUser(client);
        });
    }
    initModels() {
        (0, init_models_1.initModels)(database_1.sequelize);
    }
}
exports.Server = Server;
exports.server = new Server();
exports.server.Start();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
exports.default = () => {
    const container = (0, awilix_1.createContainer)({
        injectionMode: 'PROXY',
    });
    container.register({});
};

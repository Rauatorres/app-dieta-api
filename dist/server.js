"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const fastify = (0, fastify_1.default)({ logger: true });
fastify.register(routes_1.default);
fastify.listen({ port: 3000 }, (err, adress) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    else {
        console.log(`Server successfully running on ${adress} ...`);
    }
});

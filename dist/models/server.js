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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("../routes/router"));
const config_1 = require("../db/config");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        // this.port = process.env.PORT || '3000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnect)();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)({
            origin: "*",
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: [
                "Content-Type",
                "Authorization",
                "Origin",
                "X-Requested-With",
                "Accept",
                "Access-Control-Allow-Origin",
                "Access-Control-Allow-Headers",
                "Access-Control-Allow-Methods",
                "token"
            ],
        }));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/", router_1.default);
    }
    listen() {
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
}
exports.Server = Server;

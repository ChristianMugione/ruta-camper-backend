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
exports.deleteUser = exports.createUser = exports.userLogin = exports.getUserList = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_1 = require("./auth");
const getUserList = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({}, res) {
    try {
        const users = yield userModel_1.default.find();
        res.json({ users });
        console.log(users);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUserList = getUserList;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, password } = req.body;
    const user = usuario;
    console.log("Login: ", req.body);
    try {
        const userData = yield userModel_1.default.findOne({ name: usuario });
        if (!userData) {
            console.log("User not found");
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, userData.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        //create token and send
        const userDataPlain = Object.assign({}, userData);
        const token = (0, auth_1.generateJWT)(userDataPlain);
        console.log(token);
        // Function generateJWT
        res.json({ message: "Login successful", token: token, userId: userData._id });
    }
    catch (error) {
        console.log(error);
    }
});
exports.userLogin = userLogin;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Create User: ", req.body);
    const body = req.body;
    if (body.role === "")
        body.role = "user";
    const hashedPassword = yield bcryptjs_1.default.hash(body.password, 10);
    body.password = hashedPassword;
    console.log("User created: ", body);
    try {
        const user = yield userModel_1.default.create(body);
        res.json({ message: "Ok", info: user });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log("ID: ", id);
    try {
        const user = yield userModel_1.default.findByIdAndDelete(id);
        res.json({ message: "Ok", info: user });
    }
    catch (error) {
        res.json({ message: "Error", info: error });
    }
});
exports.deleteUser = deleteUser;

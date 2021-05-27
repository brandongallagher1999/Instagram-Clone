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
const UserHandler_1 = __importDefault(require("../modules/UserHandler"));
const config_json_1 = require("../config.json");
const cookie_1 = __importDefault(require("cookie"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express = require("express");
const router = express.Router();
const userHandler = new UserHandler_1.default();
//POST: /api/login/
router.post("/login/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    yield userHandler.login(user).then((statusCode) => {
        if (statusCode == 200) {
            const json_token = jsonwebtoken_1.default.sign({ data: { "username": user.username } }, config_json_1.jwt_secret, { expiresIn: "2h" });
            res.setHeader("Set-Cookie", cookie_1.default.serialize("jwt", json_token, { httpOnly: true }));
            res.status(200).send("Success, logged in");
        }
        else {
            res.status(statusCode).send("Login failed. Either the user doesn't exist, or the password is incorrect.");
        }
    });
    next();
}));
// POST: /api/register/
router.post("/register", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    yield userHandler.register(user).then((statusCode) => {
        if (statusCode == 200) {
            res.status(statusCode).send("Registered!");
        }
        else {
            res.status(statusCode).send("User already exists!");
        }
    });
    next();
}));
exports.default = router;

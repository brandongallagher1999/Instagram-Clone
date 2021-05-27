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
const mongoose_1 = require("mongoose");
const User_1 = __importDefault(require("../models/User"));
//@ts-ignore
const Hashes = require("jshashes");
class UserHandler {
    constructor() {
        this.SHA1 = new Hashes.SHA1; //instantiating the hashing objecting
        this.UserModel = mongoose_1.model("users", User_1.default);
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let statusCode = 406;
            user.password = this.SHA1.hex(user.password); //hash the password
            yield this.UserModel.findOne({ "username": user.username }, (err, userObj) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if (userObj) {
                        statusCode = 406;
                    }
                    else {
                        console.log("User doesn't exist!");
                        statusCode = 200;
                        new this.UserModel(user).save();
                    }
                }
            });
            return statusCode;
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let statusCode = 200;
            const hashedPassword = this.SHA1.hex(user.password); //hashing the password
            yield this.UserModel.findOne({ "username": user.username, "password": hashedPassword }, (err, userObj) => {
                if (err) {
                    statusCode = 404;
                }
                else {
                    if (userObj) {
                        statusCode = 200;
                    }
                    else {
                        statusCode = 404;
                    }
                }
            });
            return statusCode;
        });
    }
}
exports.default = UserHandler;

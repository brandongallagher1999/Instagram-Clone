import { Router, Response, Request } from "express";
import { IUser, IUserJson } from "../types/user";
import UserHandler from "../modules/UserHandler";
import { jwt_secret } from "../config.json";
import cookie from "cookie";


export {};

import jwt from "jsonwebtoken";

const express: any = require("express");

const router: Router = express.Router();

const userHandler: UserHandler = new UserHandler();

//POST: /api/login/
router.post("/login/", (req: Request, res: Response, next: any): any => {

    const user: IUserJson = req.body;
    if (userHandler.login(user) == 200)
    {
        const json_token = jwt.sign({ data: {"username" : user.username}}, jwt_secret, { expiresIn: "2h"});
        res.setHeader("Set-Cookie", cookie.serialize("jwt", json_token, {httpOnly: true}));
        res.status(200).send("Success");
    }
    else
    {
        res.status(404).send("Login failed. User not found.");
    }
    next();
});

router.post("/register", (req: Request, res: Response, next: any): any => {
    const user: IUserJson = req.body;

    userHandler.register(user)
    next();

});





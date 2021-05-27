import { Router, Response, Request } from "express";
import { IUserJson } from "../types/user";
import UserHandler from "../modules/UserHandler";
import { jwt_secret } from "../config.json";
import cookie from "cookie";
import jwt from "jsonwebtoken";

const express: any = require("express");

const router: Router = express.Router();

const userHandler: UserHandler = new UserHandler();

//POST: /api/login/
router.post("/login/", async (req: Request, res: Response, next: any)=> {

    const user: IUserJson = req.body;
    await userHandler.login(user).then((statusCode) => {
        if (statusCode == 200)
        {
            const json_token = jwt.sign({ data: {"username" : user.username}}, jwt_secret, { expiresIn: "2h"});
            res.setHeader("Set-Cookie", cookie.serialize("jwt", json_token, {httpOnly: true}));
            res.status(200).send("Success, logged in");
        }
        else
        {
            res.status(statusCode).send("Login failed. Either the user doesn't exist, or the password is incorrect.");
        }
    });

    next();
});

// POST: /api/register/
router.post("/register", async (req: Request, res: Response, next: any) => {
    const user: IUserJson = req.body;

    await userHandler.register(user).then((statusCode) => {
        if (statusCode == 200)
        {
            res.status(statusCode).send("Registered!");
        }
        else
        {
            res.status(statusCode).send("User already exists!");
        }
        
    });
    
    next();

});

export default router;


import { Router, Response, Request } from "express";
import { IUser } from "../types/user";
export {};

const express: any = require("express");

const router: Router = express.Router();

router.get("/login/", (req: Request, res: Response, next: any) => {

    const User: IUser = req.body;
    const username = req.body.username;
    

});





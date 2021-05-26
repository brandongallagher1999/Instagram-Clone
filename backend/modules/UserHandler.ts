


import mongoose, { Collection, Error, model, Model } from "mongoose";
import { IUser } from "../types/user";
import UserSchema from "../models/User";
//@ts-ignore
import jhashes from "jshashes";

import DatabaseHandler from "./DatabaseHandler";


class UserHandler extends DatabaseHandler
{

    UserModel: Model<IUser>;
    constructor()
    {
        super();
        this.UserModel = model("User", UserSchema); // Connection is somehow handled by mongoose?

    }

    register(user: IUser): number
    {
        let statusCode = 401;
        user.password = jhashes.SHA1(user.password); //hash the password
        this.UserModel.findOne({"username" : user.username}, (err: Error, userObj: IUser) => {
            if (!userObj) //if the user doesn't exist.
            {
                statusCode = 200;
                const newUser = new this.UserModel(user);
                newUser.save();
            }
            else
            {
                statusCode = 401;
            }
        });
        return statusCode;
        
    }

    login(user: IUser): number
    {
        let statusCode = 200;
        const hashedPassword: string = jhashes.SHA1(user.password); //hashing the password
        this.UserModel.findOne({"username" : user.username, "password" : hashedPassword}, (err: Error, userObj: IUser) => {
            if (err)
            {
                statusCode = 404;
            }
        });
        return statusCode;
    }
    
    
}



export default UserHandler;

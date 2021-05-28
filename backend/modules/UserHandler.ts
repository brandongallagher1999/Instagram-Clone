


import  { Error, model, Model } from "mongoose";
import { IUser, IUserJson } from "../types/user";
import UserSchema from "../models/User";

//@ts-ignore
const Hashes = require("jshashes");

/**
 * Handles both the registration and login functionality for the UserRoute
 * @module UserHandler
 */
class UserHandler
{

    UserModel: Model<IUser>;
    SHA1: any;
    constructor()
    {
        this.SHA1 = new Hashes.SHA1; //instantiating the hashing objecting
        this.UserModel = model("users", UserSchema);

    }
    /**
     * @param {IUserJson} user  The user JSON coming in from the front-end POST request.
     * 
     * @return {Promise<number>}    An HTTP status code
     */
    async register(user: IUserJson): Promise<number>
    {
        let statusCode = 406;
        user.password = this.SHA1.hex(user.password); //hash the password
        await this.UserModel.findOne({"username" : user.username}, (err: Error, userObj: IUser) => {
            if (err)
            {
                console.log(err);
            }
            else
            {
                if (userObj)
                {
                    statusCode = 406;
                }
                else
                {
                    console.log("User doesn't exist!");
                    statusCode = 200;
                    new this.UserModel(user).save();
                }
            }

        });
        return statusCode;
        
    }
        /**
     * @param {IUserJson} user  The user JSON coming in from the front-end POST request.
     * 
     * @return {Promise<number>}    An HTTP status code
     */
    async login(user: IUserJson): Promise<number>
    {
        let statusCode = 200;
        const hashedPassword: string = this.SHA1.hex(user.password); //hashing the password
        await this.UserModel.findOne({"username" : user.username, "password" : hashedPassword}, (err: Error, userObj: IUser) => {
            if (err)
            {
                statusCode = 404;
            }
            else
            {
                if (userObj) 
                {
                    statusCode = 200;
                }
                else
                {
                    statusCode = 404;
                }
            }
        });
        return statusCode;
    }
    
    
}

export default UserHandler;

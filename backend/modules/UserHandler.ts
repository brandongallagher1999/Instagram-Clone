


import mongoose, { Collection, Error, model, Model } from "mongoose";
import { IUser } from "../types/user";
import UserSchema from "../models/User";

import DatabaseHandler from "./DatabaseHandler";


class UserHandler extends DatabaseHandler
{

    UserCollection: Model<IUser>;
    constructor()
    {
        super();
        this.UserCollection = model("User", UserSchema); // Connection is somehow handled by mongoose?

    }

    login(user: IUser)
    {
        this.UserCollection.findOne({"username" : user.username}, (err: Error, userObj: IUser) => {
            if (err)
            {
                return 400;
            }
            else
            {
                
            }
        });
    }
    
    
}



export default UserHandler;

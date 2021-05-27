import {Document} from "mongoose";


interface IUserJson{
    username: string;
    password: string;
};

interface IUser extends Document{
    username: string;
    password: string;
};

export {
    IUser,
    IUserJson
};
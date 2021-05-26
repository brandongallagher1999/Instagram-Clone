
import mongoose from "mongoose";
import { IUser } from "../types/user";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default UserSchema;
import { Document } from "mongoose";
import { Request } from "express";

/**
 * For Express Requests that take in certain Body JSON type.
 * @type {T} The type of the JSON Body
 * @extends {Request}
 */
interface TypedReqest<T> extends Request {
  body: T;
}

/**
 * The User JSON body that comes in for logging in / authentication.
 * @property {string}  username    The person's username
 * @property {string}  password    The person's password
 */
interface IUserJson {
  username: string;
  password: string;
}

/**
 * This is the User that gets inserted into the MongoDB.
 * @property {string}  username    The person's username
 * @property {string}  password    The person's password
 * @extends {Document}
 */
interface IUser extends Document {
  username: string;
  password: string;
}

export { IUser, IUserJson, TypedReqest };

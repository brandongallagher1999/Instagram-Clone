import mongoose from "mongoose";

const Schema = mongoose.Schema;
/**
 * @return {UserSchema} The MongoDB User Schema
 */
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "Users" }
);

export default UserSchema;

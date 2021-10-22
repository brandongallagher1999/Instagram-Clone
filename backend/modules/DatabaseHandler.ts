import mongoose from "mongoose";
import { databaseConnection } from "../config.json";

/**
 * Creates the Database instance for MongoDB
 */
async function createDb() {
  await mongoose.connect(databaseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default createDb;

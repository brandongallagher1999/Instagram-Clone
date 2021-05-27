import mongoose from "mongoose";
import {databaseConnection} from "../config.json";

/*

*/
async function createDb()
{
    await mongoose.connect(databaseConnection, {useNewUrlParser: true, useUnifiedTopology: true});
}


export default createDb;
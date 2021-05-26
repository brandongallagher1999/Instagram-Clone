import mongoose from "mongoose";
import {databaseConnection} from "../config.json";

/*

*/
class DatabaseHandler
{
    connection: mongoose.Connection; //Connection to my database
    constructor()
    {
        this.connection = mongoose.createConnection(databaseConnection, {useNewUrlParser: true});
    }

}

export default DatabaseHandler;
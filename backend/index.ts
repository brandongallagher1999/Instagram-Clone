
export {};


import express, { Router } from "express";
import cors from "cors";
const app: express.Application = express();
import userRouter from "./routers/UserRoute";
const bodyParser = require("body-parser");
import createDb from "./modules/DatabaseHandler";


app.use(bodyParser());
app.use(cors());



app.use("/api", userRouter);

createDb().then(() => {
    app.listen(3001, () => {

        console.log("Running on port 3001!");
    });
});

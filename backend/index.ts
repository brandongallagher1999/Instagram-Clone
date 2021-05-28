
import express from "express";
import cors from "cors";
import userRouter from "./routes/UserRoute";
import createDb from "./modules/DatabaseHandler";

const bodyParser = require("body-parser");
const app: express.Application = express();

app.use(bodyParser());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}));



app.use("/api", userRouter);

createDb().then(() => {
    app.listen(3001, () => {

        console.log("Running on port 3001!");
    });
});


export {};
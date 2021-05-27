"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const UserRoute_1 = __importDefault(require("./routers/UserRoute"));
const bodyParser = require("body-parser");
const DatabaseHandler_1 = __importDefault(require("./modules/DatabaseHandler"));
app.use(bodyParser());
app.use(cors_1.default());
app.use("/api", UserRoute_1.default);
DatabaseHandler_1.default().then(() => {
    app.listen(3001, () => {
        console.log("Running on port 3001!");
    });
});

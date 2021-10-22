import { Router, Response } from "express";
import { IUserJson, TypedReqest } from "../types/user";
import UserHandler from "../modules/UserHandler";
import { jwt_secret } from "../config.json";
import jwt from "jsonwebtoken";

const router: Router = Router();

const userHandler: UserHandler = new UserHandler();

/**
 * POST: /api/login
 * @param {IUserJson} user  The User JSON with their username and password
 */
router.post(
  "/login/",
  async (req: TypedReqest<IUserJson>, res: Response, next: any) => {
    const user: IUserJson = req.body;
    await userHandler.login(user).then((statusCode: number) => {
      if (statusCode == 200) {
        const json_token = jwt.sign(
          { data: { username: user.username } },
          jwt_secret,
          { expiresIn: "2h" }
        );
        res.cookie("login_token", json_token, {
          httpOnly: true,
          maxAge: 86_400_000,
        });
        res.status(200).send("Success, logged in");
      } else {
        res
          .status(statusCode)
          .send(
            "Login failed. Either the user doesn't exist, or the password is incorrect."
          );
      }
    });

    next();
  }
);

/**
 * POST: /api/register
 * @param {IUserJson} user  The User JSON with their username and password
 */
router.post(
  "/register",
  async (req: TypedReqest<IUserJson>, res: Response, next: any) => {
    const user: IUserJson = req.body;

    await userHandler.register(user).then((statusCode: number) => {
      if (statusCode == 200) {
        res.status(statusCode).send("Registered!");
      } else {
        res.status(statusCode).send("User already exists!");
      }
    });

    next();
  }
);

export default router;
